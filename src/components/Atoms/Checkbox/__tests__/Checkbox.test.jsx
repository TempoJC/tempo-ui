import { createRef } from "react";
import { userEvent } from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("@tempo-ui/Conteng/Checkbox", () => {
  it("renders", () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds a name", () => {
    render(<Checkbox name="nameForm" />);
    expect(screen.queryByRole("checkbox")).toHaveAttribute("name", "nameForm");
  });

  it("adds a className", () => {
    const { container } = render(<Checkbox className="test-class" />);

    expect(container.querySelector("label")).toHaveClass("test-class");
  });

  it("adds an inputValue", () => {
    render(<Checkbox inputValue="test-value" />);
    expect(screen.queryByRole("checkbox")).toHaveAttribute("value", "test-value");
  });

  it("adds disabled", async () => {
    const onClick = jest.fn();

    const { container } = render(<Checkbox onClick={onClick} disabled />);
    const checkbox = screen.queryByRole("checkbox");

    expect(checkbox).toHaveAttribute("disabled");
    expect(container.querySelector("label")).toHaveClass("tempo-checkbox--disabled");

    await userEvent.click(checkbox);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("adds readOnly", async () => {
    const onChange = jest.fn();

    const { container } = render(<Checkbox onChange={onChange} readOnly />);
    const checkbox = screen.queryByRole("checkbox");
    expect(checkbox).toHaveAttribute("readOnly");
    expect(container.querySelector("label")).toHaveClass("tempo-checkbox--read-only");

    await userEvent.click(checkbox);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("adds events", async () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<Checkbox value={false} onChange={onChange} onFocus={onFocus} onBlur={onBlur} testId="checkbox" />);
    const checkbox = screen.queryByRole("checkbox");

    await userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();

    fireEvent.focus(checkbox);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(checkbox);
    expect(onBlur).toHaveBeenCalled();
  });

  it("adds inputRef", () => {
    let inputRef = createRef();
    render(<Checkbox ref={inputRef} inputValue={"test-value"} />);
    expect(inputRef.current.value).toBe("test-value");
  });

  it("adds an id", () => {
    render(<Checkbox id="testId" />);
    expect(screen.queryByRole("checkbox")).toHaveAttribute("id", "testId");
  });

  it("adds color", () => {
    const { container } = render(<Checkbox color="dark" />);
    expect(container.querySelector("label")).toHaveClass("tempo-checkbox--color-dark");
  });

  it("adds indeterminate", () => {
    const { container, rerender } = render(<Checkbox indeterminate value={false} />);
    const label = container.querySelector("label");
    expect(label).toHaveClass("tempo-checkbox--indeterminate");
    expect(label).not.toHaveClass("tempo-checkbox--checked");

    rerender(<Checkbox indeterminate value={true} />);
    expect(label).not.toHaveClass("tempo-checkbox--indeterminate");
    expect(label).toHaveClass("tempo-checkbox--checked");
  });

  it("changes value", () => {
    const { container, rerender } = render(<Checkbox value={true} />);
    const checkbox = screen.queryByRole("checkbox");
    const label = container.querySelector("label");

    expect(checkbox).toBeChecked();
    expect(label).toHaveClass("tempo-checkbox--checked");

    rerender(<Checkbox value={false} />);

    expect(checkbox).not.toBeChecked();
    expect(label).not.toHaveClass("tempo-checkbox--checked");
  });

  it("forwards tabIndex", () => {
    render(<Checkbox value={true} tabIndex={2} />);
    expect(screen.queryByRole("checkbox")).toHaveAttribute("tabIndex", "2");
  });

  describe("testId prop", () => {
    it("renders the Checkbox with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Checkbox testId="checkbox" />);

      const element = getByTestId("checkbox");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "checkbox");
    });
  });
});
