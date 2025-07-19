import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Tag from "../Tag";

describe("@tempo-ui/ContentDisplay/Tag", () => {
  it("renders", () => {
    const deleteHandler = () => {};
    const { asFragment } = render(<Tag label="label" onRemoveButtonClick={deleteHandler} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls the tag click handler", async () => {
    const clickHandler = jest.fn();

    const { container } = render(<Tag onClick={clickHandler} label="label" />);

    await userEvent.click(container.querySelector(".tempo-tag__label"));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it("renders with other variant", () => {
    const { container } = render(<Tag label="label" variant="blueberry" />);

    expect(container.querySelector(".tempo-tag")).toHaveClass("tempo-tag--color-blueberry");
  });

  describe("when deletable", () => {
    it("renders a delete button", () => {
      const { container } = render(<Tag label="label" readOnly={false} />);

      expect(container.querySelector("span")).toBeInTheDocument();
      expect(container.querySelector("span")).toHaveClass("tempo-tag__action");
    });

    it("calls the delete handler", async () => {
      const clickHandler = jest.fn();
      const deleteHandler = jest.fn();

      const { container } = render(
        <Tag onRemoveButtonClick={deleteHandler} onClick={clickHandler} label="label" readOnly={false} />,
      );

      await userEvent.click(container.querySelector("span.tempo-tag__action"));

      expect(deleteHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  it("adds the additional className", () => {
    const { container } = render(<Tag className="customClass" label="label" readOnly />);

    expect(container.querySelector(".tempo-tag")).toHaveClass("customClass");
  });

  describe("when disabled", () => {
    it("renders a disabled tag", () => {
      const { container } = render(<Tag label="label" disabled />);

      expect(container.querySelector(".tempo-tag")).toHaveClass("tempo-tag--disabled");
    });

    it("does not call the click handler", async () => {
      const clickHandler = jest.fn();

      const { container } = render(<Tag onClick={clickHandler} label="label" disabled />);

      await userEvent.click(container.querySelector(".tempo-tag__label"));

      expect(clickHandler).not.toHaveBeenCalled();
    });

    it("does not call the delete handler", async () => {
      const deleteHandler = jest.fn();

      const { container } = render(<Tag onRemoveButtonClick={deleteHandler} label="label" disabled readOnly={false} />);

      await userEvent.click(container.querySelector("span.tempo-tag__action"));

      expect(deleteHandler).not.toHaveBeenCalled();
    });
  });

  describe("testId prop", () => {
    it("renders the Tag with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Tag label="label" testId="tag" />);
      const element = getByTestId("tag");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "tag");
    });
  });

  it("render lowercase label", () => {
    render(<Tag label="label" testId="tag" uppercase={false} />);
    expect(screen.getByText("label")).toHaveClass("tempo-tag__label--lowercase");
  });
});
