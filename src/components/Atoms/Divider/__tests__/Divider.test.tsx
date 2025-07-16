import { render } from "@testing-library/react";
import Divider from "../Divider";

describe("@tempo-ui/Atoms/Divider", () => {
  it("renders", () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("kind", () => {
    it("is horizontal", () => {
      const { asFragment } = render(<Divider kind="horizontal" />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is vertical", () => {
      const { asFragment } = render(<Divider kind="vertical" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("contrast & color", () => {
    it("is contrast high and color light", () => {
      const { asFragment } = render(<Divider />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is contrast medium and color light", () => {
      const { asFragment } = render(<Divider contrast="medium" />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is contrast low and color light", () => {
      const { asFragment } = render(<Divider contrast="low" />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is contrast high and color dark", () => {
      const { asFragment } = render(<Divider color="dark" />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is contrast medium and color dark", () => {
      const { asFragment } = render(<Divider contrast="medium" color="dark" />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("is contrast low and color dark", () => {
      const { asFragment } = render(<Divider contrast="low" color="dark" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("adds the additional className", () => {
    const { container } = render(<Divider className="customClass" />);
    expect(container.querySelector(".customClass")).toBeInTheDocument();
  });

  describe("testId prop", () => {
    it("renders the divider with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Divider testId="divider" />);

      const element = getByTestId("divider");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "divider");
    });
  });
});
