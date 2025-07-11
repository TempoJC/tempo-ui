import { render, screen, waitFor } from "@testing-library/react"; // Ensure waitFor is imported if used
import userEvent from "@testing-library/user-event";
import Icon from "../Icon";

// Mock the 'iconSvgs' module.
// This is crucial because `iconSvgs` might use 'import.meta.glob' or other bundler-specific features
// that Jest/Node.js doesn't understand natively without specific transformers.
// By mocking it, we control what `getIconSvg` returns in our tests.
jest.mock("./../iconSvgs", () => ({
  __esModule: true,
  // Mock the 'getIconSvg' function to return a resolved Promise with a simple SVG string.
  // This simulates a successful SVG fetch/load.
  getIconSvg: jest.fn((group: string, name: string) => {
    // Return a basic SVG structure. The `viewBox` is added to ensure it's a valid SVG,
    // and an ID/path for potential assertions about the content.
    return Promise.resolve(`<svg viewBox="0 0 20 20" id="mock-${group}-${name}"><path d="M0 0 H20 V20 H0 Z"/></svg>`);
  }),
}));

// Import the mocked 'getIconSvg' function.
// This import now points to the mock defined above, not the real module.
import { getIconSvg } from "./../iconSvgs";

describe("@tempo/Icon", () => {
  // Before each test, clear any mock calls to ensure test isolation.
  beforeEach(() => {
    (getIconSvg as jest.Mock).mockClear();
  });

  describe("when the sprite loads", () => {
    describe("inlining", () => {
      it("updates the SVG node", async () => {
        // Render the Icon component with specific group and name props.
        render(<Icon group="actions" name="add" />);

        // Wait for the SVG to be loaded and inserted into the DOM.
        // This is crucial because the SVG loading and insertion process is asynchronous.
        await waitFor(() => {
          // Get the rendered SVG element by its ARIA role 'img'.
          const imageIcon = screen.getByRole("img");
          // Assert that the SVG element is present in the document.
          expect(imageIcon).toBeInTheDocument();

          // Verify the custom attributes that your Icon component adds to the SVG element.
          expect(imageIcon.getAttribute("data-icon-group")).toBe("actions");
          expect(imageIcon.getAttribute("data-icon-name")).toBe("add");

          // Optional: Verify the content of the mocked SVG that was inserted.
          // Check if a 'path' element exists within the SVG.
          expect(imageIcon.querySelector("path")).toBeInTheDocument();
          // Check the 'd' attribute of the inserted 'path' element to ensure content correctness.
          expect(imageIcon.querySelector("path")?.getAttribute("d")).toBe("M0 0 H20 V20 H0 Z");
        });
      });
    });

    describe("extra props", () => {
      it("can override any prop", async () => {
        // Render the Icon component, overriding the default 'viewBox' prop.
        render(<Icon group="actions" name="add" viewBox="0 0 50 30" />);

        // Wait for the asynchronous rendering and SVG insertion to complete.
        await waitFor(() => {
          // Get the rendered SVG element.
          const imageIcon = screen.getByRole("img");
          expect(imageIcon).toBeInTheDocument();
          // Verify that the 'viewBox' attribute on the rendered SVG matches the overridden value.
          // This ensures that extra props are correctly passed down and applied.
          expect(imageIcon.getAttribute("viewBox")).toBe("0 0 50 30");
        });
      });
    });

    describe("when onClick is set", () => {
      it("is executed when the icon is clicked", async () => {
        // Create a mock function to act as the click handler.
        const clickHandler = jest.fn();
        // Render the Icon component with an onClick handler and a testId.
        const { getByTestId } = render(
          <Icon group="actions" name="add" onClick={clickHandler} testId="clickable-icon" />,
        );

        // Wait for the icon component (and its SVG content) to be rendered and in the DOM before attempting to click.
        await waitFor(() => {
          const clickableIcon = getByTestId("clickable-icon");
          expect(clickableIcon).toBeInTheDocument();
        });

        // Get the clickable icon element from the DOM (using screen.getByTestId is generally preferred).
        const clickableIcon = screen.getByTestId("clickable-icon");
        // Simulate a user click event on the icon.
        await userEvent.click(clickableIcon);

        // Assert that the click handler was called exactly once.
        expect(clickHandler).toHaveBeenCalledTimes(1);
      });
    });

    describe("testId prop", () => {
      it("renders the Icon with the specified data-testid attribute", async () => {
        // Render the Icon component with a custom testId and className.
        const { getByTestId } = render(<Icon group="actions" name="add" className="custom" testId="tempo-icon" />);

        // Wait for the component to render and the SVG to be inserted.
        await waitFor(() => {
          // Get the element by its testId.
          const iconElement = getByTestId("tempo-icon"); // Renamed for clarity
          // Assert that the element is present in the document.
          expect(iconElement).toBeInTheDocument();
          // Assert that the element has the correct 'data-testid' attribute.
          expect(iconElement).toHaveAttribute("data-testid", "tempo-icon");
        });
      });
    });
  });
});
