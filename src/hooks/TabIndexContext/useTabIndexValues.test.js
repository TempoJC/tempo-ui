import { render, screen } from "@testing-library/react";
import TabIndexContextProvider from "./TabIndexContextProvider.jsx";
import useTabIndexValues from "./useTabIndexValues.jsx";

describe("useTabIndexValues", () => {
  it("get tabIndexValues", () => {
    const TestComponent = () => {
      const tabIndexValues = useTabIndexValues();
      return (
        <div>
          <div data-testid={"existent"} tabIndex={tabIndexValues.existentProp}>
            existent
          </div>
          <div data-testid={"non-existent"} tabIndex={tabIndexValues.nonExistentProp}>
            non existent prop sets to undefined
          </div>
        </div>
      );
    };

    const tabIndexValues = { existentProp: 1 };

    render(
      <TabIndexContextProvider value={tabIndexValues}>
        <TestComponent id="test-component" />
      </TabIndexContextProvider>,
    );

    expect(screen.getByTestId("existent")).toHaveAttribute("tabindex", "1");
    expect(screen.getByTestId("non-existent")).not.toHaveAttribute("tabindex");
  });
});
