import { render, screen } from "@testing-library/react";
import Label from "../Label";

describe("@tempo-ui/ContentDisplay/Label", () => {
  it("renders", () => {
    const { asFragment } = render(<Label label="Label" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("render icons", () => {
    const { asFragment } = render(<Label label="Label with icon" iconLeft={<div data-mock-id />} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("render with other color", () => {
    const { asFragment } = render(<Label label="Label with icon" color="dark" iconLeft={<div data-mock-id />} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("render with other variant", () => {
    const { asFragment } = render(
      <Label label="Label with icon" variant="blueberry" color="dark" iconLeft={<div data-mock-id />} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe("testId prop", () => {
    it("renders the Label with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Label testId="labelID" label="Label1" />);
      const element = getByTestId("labelID");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "labelID");
    });
  });

  it("render lowercase label", () => {
    render(<Label testId="labelLowercase" label="Label" uppercase={false} />);
    expect(screen.getByText("Label")).toHaveClass("tempo-label__content--lowercase");
  });
});
