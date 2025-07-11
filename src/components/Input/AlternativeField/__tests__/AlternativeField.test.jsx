import { render, screen, getAllByText } from "@testing-library/react";
import AlternativeField from "../AlternativeField";

describe("@tempo-ui/Input/AlternativeField", () => {
  it("renders", () => {
    const { container } = render(<AlternativeField />);
    expect(container).toMatchSnapshot();
  });

  it("renders a label", () => {
    render(<AlternativeField label="Label" />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders a helper text", () => {
    render(<AlternativeField helper="Helper Text" />);
    expect(screen.getByText("Helper Text")).toBeInTheDocument();
  });

  it("renders a single line error text, inside a list", () => {
    render(<AlternativeField errors={["Error1"]} testId="testId" />);

    const errorsComponent = screen.getByTestId("testId-inputInfo-errors");
    const errors = getAllByText(
      errorsComponent,
      (content, element) => content === "Error1" && element.tagName.toLowerCase() === "li",
    );
    expect(errors).toHaveLength(1);
  });

  it("renders list of multiple errors", () => {
    render(<AlternativeField errors={["Error1", "Error2", "Error3"]} testId="testId" />);

    const errorsComponent = screen.getByTestId("testId-inputInfo-errors");
    const errors = getAllByText(
      errorsComponent,
      (content, element) => content.match(/Error[0-3]/) && element.tagName.toLowerCase() === "li",
    );

    expect(errors).toHaveLength(3);
  });

  it("adds the additional className", () => {
    const { container } = render(<AlternativeField className="customClass" />);

    expect(container.querySelector(".customClass")).toBeInTheDocument();
  });

  describe("testId prop", () => {
    it("renders the alternativeButton with the specified data-testid attribute", () => {
      const { getByTestId } = render(<AlternativeField testId="alternative-field" />);

      const element = getByTestId("alternative-field");

      // Verifies that the element is in the document (implicit by getByTestId, but good practice)
      expect(element).toBeInTheDocument();

      // Optional: If you want to be even more explicit about the attribute
      expect(element).toHaveAttribute("data-testid", "alternative-field");
    });
  });

  describe("dense", () => {
    it("renders a dense alternative field", () => {
      const { container } = render(<AlternativeField dense />);

      expect(container.querySelector(".tempo-alternative-field--dense")).toBeInTheDocument();
    });
  });
});
