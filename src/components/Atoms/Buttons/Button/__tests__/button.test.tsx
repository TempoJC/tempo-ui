import { userEvent } from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import Button from "../Button";

describe("@tempo-ui/Atoms/Buttons/button", () => {
  describe("with icons", () => {
    it("renders the icon before the label when iconStart & label are present", () => {
      const { container } = render(
        <Button className="customClass" label="label" iconStart={<div className="icon">icon</div>} />,
      );
      // No waitFor needed here, as iconStart is a direct div, not an asynchronous Icon component.
      expect(container.querySelector(".customClass .icon + .tempo-button__label")).toBeInTheDocument();
    });

    it("renders the icon after the label when iconEnd & label are present", () => {
      const { container } = render(
        <Button className="customClass" label="label" iconEnd={<div className="icon">icon</div>} />,
      );
      // No waitFor needed here.
      expect(container.querySelector(".customClass .tempo-button__label + .icon")).toBeInTheDocument();
    });
  });

  describe("enabled", () => {
    it("renders", () => {
      const { asFragment } = render(<Button label="enabled" iconStart={<div>some icon</div>} />);
      // Snapshots should be stable. If the Icon mock always returns the same thing, this is fine.
      // If iconStart were a real Icon, waitFor might be needed.
      expect(asFragment()).toMatchSnapshot();
    });

    it("handles clicks", async () => {
      const clickHandler = jest.fn();
      render(<Button onClick={clickHandler} label="enabled" iconStart={<div>some icon</div>} />);

      // No waitFor needed here unless the button itself renders asynchronously.
      // screen.getByRole("button") will inherently wait a small amount if the element isn't immediately present.
      await userEvent.click(screen.getByRole("button"));
      expect(clickHandler).toHaveBeenCalled();
    });

    describe("renders the dropdown button UI", () => {
      it("without dropdownVisible", async () => {
        render(<Button dropdown label="enabled" />);
        // We need to await waitFor because the Button component renders a mocked Icon,
        // and we want to ensure MockedIcon was called with the correct props.
        await waitFor(() => {
          // Verify that the mocked Icon component was rendered with the correct props.
          // The mock returns an SVG with 'data-icon-name' that we can use.
          expect(screen.getByTestId("mock-icon-arrows-chevron-down")).toBeInTheDocument();
        });
      });

      it("with dropdownVisible", async () => {
        render(<Button dropdown dropdownVisible label="enabled" />);
        await waitFor(() => {
          // Verify that the mocked Icon component was rendered with the correct props.
          expect(screen.getByTestId("mock-icon-arrows-chevron-up")).toBeInTheDocument();
        });
      });
    });
  });

  describe("disabled", () => {
    it("does not call the event handler", async () => {
      const clickHandler = jest.fn();
      render(<Button onClick={clickHandler} disabled />);
      await userEvent.click(screen.getByRole("button"));
      expect(clickHandler).not.toHaveBeenCalled();
    });

    it("renders a loading spinner", async () => {
      const clickHandler = jest.fn();
      render(<Button onClick={clickHandler} loading />); // Render the button in a loading state

      await waitFor(() => {
        // MODIFIED: Now we look for the mocked loader by its data-testid.
        expect(screen.getByTestId("mock-loader")).toBeInTheDocument();
        // Optional: If you want to verify that Button passed the correct class to the mocked Loader.
        expect(screen.getByTestId("mock-loader")).toHaveClass("tempo-button__loader");
      });
      await userEvent.click(screen.getByRole("button"));
      expect(clickHandler).not.toHaveBeenCalled();
    });
  });

  describe("extra", () => {
    it("renders with an additional className", () => {
      render(<Button extra disabled />);
      expect(screen.getByRole("button")).toHaveClass("tempo-button--extra");
    });
  });

  it("adds the additional className", () => {
    render(<Button className="customClass" label="custom" />);
    expect(screen.getByRole("button")).toHaveClass("customClass");
  });

  describe("form", () => {
    it("sets the form attribute if provided", () => {
      render(<Button form="my-form" label="custom" />);
      expect(screen.getByRole("button")).toHaveAttribute("form", "my-form");
    });
  });

  describe("testId prop", () => {
    it("renders the button with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Button label="button-title" testId="button" />);
      const buttonElement = getByTestId("button");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveAttribute("data-testid", "button");
    });
  });
});
