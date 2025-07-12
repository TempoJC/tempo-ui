import keystroke from "./keystroke.js";

describe("keystroke", () => {
  test.each([
    [{ key: "Backspace" }, "backspace"],
    [{ key: "Enter" }, "enter"],
    [{ key: " " }, "space"],
    [{ key: "Tab" }, "tab"],
    [{ key: "Escape" }, "escape"],
    [{ key: "ArrowUp" }, "arrowUp"],
    [{ key: "ArrowDown" }, "arrowDown"],
    [{ key: "ArrowLeft" }, "arrowLeft"],
    [{ key: "ArrowRight" }, "arrowRight"],
    [{ metaKey: true }, "metaKey"],
    [{ shiftKey: true }, "shiftKey"],
  ])("recognices %o as %s", (attrs, getter) => {
    const event = new KeyboardEvent("keydown", {
      ...attrs,
    });

    expect(keystroke(event)[getter]).toBe(true);
  });

  test.each([
    [{ key: "a" }, "a"],
    [{ key: "." }, "."],
  ])("recognices %o as %s", (attrs, key) => {
    const event = new KeyboardEvent("keydown", {
      ...attrs,
    });

    expect(keystroke(event).char(key)).toBe(true);
  });

  test.each([
    [{ metaKey: true, key: "a" }, "a"],
    [{ metaKey: true, key: "c" }, "c"],
    [{ metaKey: true, key: "v" }, "v"],
    [{ metaKey: true, key: "x" }, "x"],
  ])("recognices %o as meta+%s", (attrs, key) => {
    const event = new KeyboardEvent("keydown", {
      ...attrs,
    });

    expect(keystroke(event).meta(key)).toBe(true);
  });

  test.each([
    [{ ctrlKey: true, key: "a" }, "a"],
    [{ ctrlKey: true, key: "c" }, "c"],
    [{ ctrlKey: true, key: "v" }, "v"],
    [{ ctrlKey: true, key: "x" }, "x"],
  ])("recognices %o as ctrl+%s", (attrs, key) => {
    const event = new KeyboardEvent("keydown", {
      ...attrs,
    });

    expect(keystroke(event).ctrl(key)).toBe(true);
    expect(keystroke(event).controlKey).toBe(true);
  });

  test.each([[{ key: "ArrowUp" }], [{ key: "ArrowDown" }], [{ key: "ArrowLeft" }], [{ key: "ArrowRight" }]])(
    "recognices %o as an arrow",
    (attrs) => {
      const event = new KeyboardEvent("keydown", {
        ...attrs,
      });

      expect(keystroke(event).arrow).toBe(true);
    },
  );
});
