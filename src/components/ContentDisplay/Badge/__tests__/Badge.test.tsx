import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("@tempo-ui/ContentDisplay/Badge", () => {
  it("renders", () => {
    const { asFragment } = render(<Badge text={"5"} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders small badge", () => {
    const { asFragment } = render(<Badge size="small" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders circular badge", () => {
    const { asFragment } = render(<Badge kind="circular" text="8" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("remove long text when kind is circular", () => {
    const { asFragment } = render(<Badge kind="circular" text="250" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders autolayout badge", () => {
    const { asFragment } = render(<Badge kind="autolayout" text="124" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders badge with dark color scheme", () => {
    const { asFragment } = render(<Badge text="4" color="dark" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders badge with a variant", () => {
    render(<Badge text="4" variant="coconut" testId="badge" />);
    expect(screen.getByTestId("badge")).toHaveClass("tempo-badge--color-coconut");
  });

  describe("testId prop", () => {
    it("renders the Badge with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Badge testId="badge" />);
      const element = getByTestId("badge");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "badge");
    });
  });
});
