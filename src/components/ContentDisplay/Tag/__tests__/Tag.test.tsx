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

    render(<Tag onClick={clickHandler} label="label" />);

    await userEvent.click(screen.getByText("label"));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it("renders with other variant", () => {
    render(<Tag label="label" variant="blueberry" />);

    expect(screen.getByText("label").parentElement).toHaveClass("tempo-tag--color-blueberry");
  });

  describe("when deletable", () => {
    it("renders a delete button", () => {
      render(<Tag label="label" readOnly={false} />);

      expect(screen.getByRole("button")).toBeInTheDocument();
      expect(screen.getByRole("button")).toHaveClass("tempo-tag__action");
    });

    it("calls the delete handler", async () => {
      const clickHandler = jest.fn();
      const deleteHandler = jest.fn();

      render(<Tag onRemoveButtonClick={deleteHandler} onClick={clickHandler} label="label" readOnly={false} />);

      await userEvent.click(screen.getByRole("button"));

      expect(deleteHandler).toHaveBeenCalledTimes(1);
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  it("adds the additional className", () => {
    render(<Tag className="customClass" label="label" readOnly />);

    expect(screen.getByText("label").parentElement).toHaveClass("customClass");
  });

  describe("when disabled", () => {
    it("renders a disabled tag", () => {
      render(<Tag label="label" disabled />);

      expect(screen.getByText("label").parentElement).toHaveClass("tempo-tag--disabled");
    });

    it("does not call the click handler", async () => {
      const clickHandler = jest.fn();

      render(<Tag onClick={clickHandler} label="label" disabled />);

      await userEvent.click(screen.getByText("label"));

      expect(clickHandler).not.toHaveBeenCalled();
    });

    it("does not call the delete handler", async () => {
      const deleteHandler = jest.fn();

      render(<Tag onRemoveButtonClick={deleteHandler} label="label" disabled readOnly={false} />);

      await userEvent.click(screen.getByRole("button"));

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
