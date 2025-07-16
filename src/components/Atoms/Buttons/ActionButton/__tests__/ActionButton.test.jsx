import { userEvent } from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import ActionButton from "../ActionButton";

describe("@tempo-ui/Atoms/Buttons/ActionButton", () => {
  describe("with icons", () => {
    it("renders the icon before the label when iconStart & label are present", () => {
      const { asFragment } = render(
        <ActionButton className="customClass" label="icon before" iconStart={<div>icon</div>} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders the icon after the label when iconEnd & label are present", () => {
      const { asFragment } = render(
        <ActionButton className="customClass" label="icon after" iconEnd={<div>icon</div>} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("enabled", () => {
    it("renders", async () => {
      const clickHandler = jest.fn();
      const { container } = render(
        <ActionButton
          onClick={clickHandler}
          label="enabled"
          startIcon={<div>some icon</div>}
          testId="action-button-icon"
        />,
      );

      expect(container).toMatchSnapshot();

      const icon = container.querySelector("[data-testid='action-button-icon']");
      await userEvent.click(icon);
      expect(clickHandler).toHaveBeenCalled();
    });
  });

  describe("disabled", () => {
    it("does not call the event handler", async () => {
      const clickHandler = jest.fn();
      const { container } = render(<ActionButton onClick={clickHandler} disabled testId={"action-button-icon"} />);

      const icon = container.querySelector("[data-testid='action-button-icon']");
      await userEvent.click(icon);
      expect(clickHandler).not.toHaveBeenCalled();
    });

    it("renders a loading spinner", async () => {
      const clickHandler = jest.fn();
      render(<ActionButton onClick={clickHandler} loading />);

      await waitFor(() => {
        expect(screen.getByTestId("mock-loader")).toBeInTheDocument();
        expect(screen.getByTestId("mock-loader")).toHaveClass("tempo-action-button__loader");
      });
      await userEvent.click(screen.getByRole("button"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe("renders the dropdown button UI", () => {
    it("without dropdownVisible", () => {
      const { container } = render(<ActionButton dropdown label="Dropdown action button" />);

      expect(container.querySelector("[data-icon-name=chevron-down-outlined]")).toBeInTheDocument();
    });

    it("with dropdownVisible", () => {
      const { container } = render(<ActionButton dropdown dropdownVisible label="Dropdown action button" />);

      expect(container.querySelector("[data-icon-name=chevron-up-outlined]")).toBeInTheDocument();
    });
  });

  it("adds the additional className", () => {
    render(<ActionButton className="customClass" label="custom" />);
    expect(screen.getByRole("button")).toHaveClass("customClass");
  });

  describe("form", () => {
    it("sets the form attribute if provided", async () => {
      render(<ActionButton form="my-form" label="custom" />);

      expect(screen.getByRole("button")).toHaveAttribute("form", "my-form");
    });
  });

  describe("testId prop", () => {
    it("renders the ActionButton with the specified data-testid attribute", () => {
      const { getByTestId } = render(<ActionButton label="button-title" testId="action-button" />);
      const buttonElement = getByTestId("action-button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveAttribute("data-testid", "action-button");
    });
  });
});
