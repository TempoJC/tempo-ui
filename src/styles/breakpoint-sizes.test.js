import { getBreakpointName } from "./breakpoint-sizes.js";

describe("getBreakpointName", () => {
  test.each([
    [150, "XS"],
    [743, "XS"],
    [744, "S"],
    [900, "S"],
    [1023, "S"],
    [1024, "M"],
    [1124, "M"],
    [1239, "M"],
    [1240, "L"],
    [1380, "L"],
    [1799, "L"],
    [1800, "XL"],
    [2920, "XL"],
  ])("%s is %s", async (width, name) => {
    expect(getBreakpointName(width)).toBe(name);
  });
});
