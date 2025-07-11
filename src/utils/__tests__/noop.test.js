import noop from "../noop";

describe("noop", () => {
  it("is a null function", () => {
    expect(typeof noop).toBe("function");
    expect(noop()).toBeUndefined();
  });
});
