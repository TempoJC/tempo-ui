import { render, screen } from "@testing-library/react";
import FeedbackState from "../FeedbackState";

describe("@tempo-ui/Feedback/FeedbackState", () => {
  it("renders", () => {
    const { asFragment } = render(<FeedbackState title="Items not found" subtitle="Load another file to start" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("has title", () => {
    render(<FeedbackState title={<p>title</p>} />);
    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("has subtitle", () => {
    render(<FeedbackState subtitle={<p>support message</p>} />);
    expect(screen.getByText("support message")).toBeInTheDocument();
  });

  it("has header", () => {
    render(<FeedbackState header={<p>header</p>} />);
    expect(screen.getByText("header")).toBeInTheDocument();
  });

  it("has footer", () => {
    render(<FeedbackState footer={<p>footer</p>} />);
    expect(screen.getByText("footer")).toBeInTheDocument();
  });

  describe("testId prop", () => {
    it("renders the FeedbackState with the specified data-testid attribute", () => {
      const { getByTestId } = render(<FeedbackState testId="feedback-state" />);
      const element = getByTestId("feedback-state");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "feedback-state");
    });
  });
});
