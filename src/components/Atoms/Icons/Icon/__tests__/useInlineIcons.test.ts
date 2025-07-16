import { renderHook, act, waitFor } from "@testing-library/react";
import { RefObject } from "react"; // Required for RefObject type
import useInlineIcons from "../hooks/useInlineIcons";

// Mock useSvgLoader BEFORE importing it.
// This is crucial for Jest to intercept the actual import.
jest.mock("./../hooks/useSvgLoader", () => ({
  __esModule: true,
  default: jest.fn(), // Mock the default export
}));

import useSvgLoader from "./../hooks/useSvgLoader";

// Explicitly type the useSvgLoader mock as Jest.Mock
const mockUseSvgLoader = useSvgLoader as jest.Mock;

// Mock SVG content.
// The MOCK_SVG_CONTENT should only contain the INTERNAL SVG content.
// Your Icon component renders the <svg> tag, and onSvgLoaded inserts this content inside it.
const MOCK_SVG_CONTENT = `<path d="M10 0 L20 10 L10 20 L0 10 Z" />`;

// This mock is not used in the current solution but kept if you want to simulate SVG failures
// const MOCK_ERROR_SVG_CONTENT = `invalid svg content`;

describe("useInlineIcons", () => {
  beforeEach(() => {
    // Clear the mock before each test to ensure a clean state
    mockUseSvgLoader.mockClear();

    // Set the default mock behavior for all tests (successful loading scenario)
    mockUseSvgLoader.mockImplementation(({ group, name, onSvgLoaded }) => {
      // Create the SVG element that simulates the `ref.current` of the Icon component.
      // This is the element that `useInlineIcons` is expected to modify.
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      // It's crucial to append this element to the test DOM for `toBeInTheDocument()` to work.
      document.body.appendChild(svgElement);

      // Create the RefObject that will be returned by useSvgLoader
      const svgRef = { current: svgElement } as RefObject<SVGSVGElement>;

      // Simulate the asynchronous resolution of the SVG loading
      Promise.resolve().then(() => {
        // Call the onSvgLoaded function that useInlineIcons passed to useSvgLoader,
        // with the SVG content and the ref.
        onSvgLoaded({ content: MOCK_SVG_CONTENT, ref: svgRef });
      });

      return {
        svgRef,
        error: false,
      };
    });
  });

  afterEach(() => {
    // Clear all mocks and reset the DOM after each test to prevent interference between tests
    jest.clearAllMocks();
    document.body.innerHTML = ""; // Clears the DOM
  });

  it("should call useSvgLoader with correct props and return its state", () => {
    const group = "social";
    const name = "facebook";

    // Render the hook
    const { result } = renderHook(() => useInlineIcons({ group, name }));

    // Verify that useSvgLoader was called with the correct arguments
    expect(mockUseSvgLoader).toHaveBeenCalledTimes(1);
    expect(mockUseSvgLoader).toHaveBeenCalledWith(
      expect.objectContaining({
        group,
        name,
        onSvgLoaded: expect.any(Function), // We expect onSvgLoaded to be a function
      }),
    );

    // Verify that the hook returns the expected structure from useSvgLoader
    expect(result.current).toHaveProperty("svgRef");
    expect(result.current).toHaveProperty("error", false);
  });

  it("should insert the SVG content into the ref when onSvgLoaded is called", async () => {
    const group = "actions";
    const name = "add";

    // svgRef type must allow null, as React.RefObject<T> always has `current: T | null`
    let svgRef: RefObject<SVGSVGElement | null>;

    // Render the hook
    const { result } = renderHook(() => useInlineIcons({ group, name }));

    // Access the ref from the hook's result
    svgRef = result.current.svgRef;

    // Wait for the asynchronous SVG loading to complete and the DOM to update
    await waitFor(() => {
      // Verify that the SVG element (svgRef.current) is in the document
      expect(svgRef?.current).toBeInTheDocument();

      // Verify that the SVG content (the <path>) has been correctly inserted inside svgRef.current
      const pathElement = svgRef?.current?.querySelector("path");
      expect(pathElement).toBeInTheDocument();
      expect(pathElement?.getAttribute("d")).toBe("M10 0 L20 10 L10 20 L0 10 Z");

      // Ensure that there is no nested <svg> inside svgRef.current
      expect(svgRef?.current?.querySelector("svg")).toBeNull();
    });
  });

  it("should return error true if useSvgLoader indicates an error", async () => {
    // Overwrite the mock behavior for this specific test (simulate error)
    mockUseSvgLoader.mockImplementation(() => ({
      svgRef: { current: null }, // In case of error, the ref can be null
      error: true,
    }));

    // Render the hook with the error scenario
    const { result } = renderHook(() => useInlineIcons({ group: "fail", name: "icon" }));

    // Verify that the hook returns error: true
    expect(result.current.error).toBe(true);
    // Verify that the ref's current value is null in this scenario
    expect(result.current.svgRef.current).toBeNull();
  });
});
