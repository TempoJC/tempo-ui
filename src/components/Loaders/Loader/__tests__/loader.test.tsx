import { render } from "@testing-library/react";
import Loader from "../Loader";

describe("@tempo/loader", () => {
  it("renders", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });

  describe("kind", () => {
    it("is circular", () => {
      const { container } = render(<Loader />);
      expect(container.querySelector(".tempo-loader--circular .tempo-loader__progress--circular")).toBeInTheDocument();
    });
    it("is a bar", () => {
      const { container } = render(<Loader kind="bar" />);
      expect(container.querySelector(".tempo-loader--bar .tempo-loader__progress--bar")).toBeInTheDocument();
    });
  });

  describe("circular size", () => {
    it("is large", () => {
      const { container } = render(<Loader />);
      expect(container.querySelector(".tempo-loader--circular-large")).toBeInTheDocument();
    });
    it("is medium", () => {
      const { container } = render(<Loader size="medium" />);
      expect(container.querySelector(".tempo-loader--circular-medium")).toBeInTheDocument();
    });
    it("is small", () => {
      const { container } = render(<Loader size="small" />);
      expect(container.querySelector(".tempo-loader--circular-small")).toBeInTheDocument();
    });
  });

  it("adds the additional className", () => {
    const { container } = render(<Loader className="customClass" />);
    expect(container.querySelector(".customClass")).toBeInTheDocument();
  });

  describe("testId prop", () => {
    it("renders the loader with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Loader testId="loader" />);

      const buttonElement = getByTestId("loader");

      // Verifies that the element is in the document (implicit by getByTestId, but good practice)
      expect(buttonElement).toBeInTheDocument();

      // Optional: If you want to be even more explicit about the attribute
      expect(buttonElement).toHaveAttribute("data-testid", "loader");
    });
  });
});
