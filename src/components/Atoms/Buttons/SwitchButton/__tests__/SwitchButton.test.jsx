import { userEvent } from "@testing-library/user-event";
import { render } from "@testing-library/react";
import SwitchButton from "../SwitchButton";

const MockIcon = ({ selected, disabled }) => (
  <div data-icon-type={selected ? "selected" : "unselected"} data-icon-state={disabled ? "disabled" : "enabled"} />
);

describe("@tempo-ui/Atoms/Buttons/SwitchButton", () => {
  it("renders", () => {
    const { asFragment } = render(<SwitchButton icon={<MockIcon />} />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe("selected", () => {
    it("injects the selected value set to true", () => {
      const { container } = render(<SwitchButton icon={<MockIcon selected />} selected />);

      expect(container.querySelector("[data-icon-type='selected']")).toBeInTheDocument();
    });

    it("injects the selected value set to false", () => {
      const { container } = render(<SwitchButton icon={<MockIcon selected={false} />} selected={false} />);

      expect(container.querySelector("[data-icon-type='unselected']")).toBeInTheDocument();
    });
  });

  describe("disabled", () => {
    it("injects the disabled value set to true", () => {
      const { container } = render(<SwitchButton icon={<MockIcon disabled />} disabled />);

      expect(container.querySelector("[data-icon-state='disabled']")).toBeInTheDocument();
    });

    it("injects the disabled value set to false", () => {
      const { container } = render(<SwitchButton icon={<MockIcon disabled={false} />} disabled={false} />);

      expect(container.querySelector("[data-icon-state='enabled']")).toBeInTheDocument();
    });

    it("calls the event handler", async () => {
      const clickHandler = jest.fn();

      const { container } = render(<SwitchButton testId="switch-button" icon={<MockIcon />} onClick={clickHandler} />);

      const button = container.querySelector("[data-testid='switch-button']");
      await userEvent.click(button);
      expect(clickHandler).toHaveBeenCalled();
    });

    it("does not call the event handler", async () => {
      const clickHandler = jest.fn();

      const { container } = render(
        <SwitchButton testId="switch-button" icon={<MockIcon disabled />} disabled onClick={clickHandler} />,
      );

      const button = container.querySelector("[data-testid='switch-button']");
      await userEvent.click(button);
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  it("adds the additional className", () => {
    const { container } = render(<SwitchButton testId="switch-button" className="customClass" icon={<MockIcon />} />);
    expect(container.querySelector("[data-testid='switch-button']")).toHaveClass("customClass");
  });

  describe("testId prop", () => {
    it("renders the SwitchButton with the specified data-testid attribute", () => {
      const { getByTestId } = render(<SwitchButton icon={<MockIcon />} testId="switch-button" />);
      const buttonElement = getByTestId("switch-button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveAttribute("data-testid", "switch-button");
    });
  });
});
