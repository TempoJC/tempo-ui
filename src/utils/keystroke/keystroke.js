const keystroke = (event) => {
  return {
    get backspace() {
      return event.key === "Backspace";
    },

    get enter() {
      return event.key === "Enter";
    },

    get space() {
      return event.key === " ";
    },

    get tab() {
      return event.key === "Tab";
    },

    get escape() {
      return event.key === "Escape";
    },

    get arrowUp() {
      return event.key === "ArrowUp";
    },

    get arrowDown() {
      return event.key === "ArrowDown";
    },

    get arrowLeft() {
      return event.key === "ArrowLeft";
    },

    get arrowRight() {
      return event.key === "ArrowRight";
    },

    get arrow() {
      return event.key.startsWith("Arrow");
    },

    meta(char) {
      return event.key === char && event.metaKey;
    },

    ctrl(char) {
      return event.key === char && event.ctrlKey;
    },

    char(char) {
      return event.key === char;
    },

    get metaKey() {
      return event.metaKey;
    },

    get shiftKey() {
      return event.shiftKey;
    },

    get controlKey() {
      return event.ctrlKey;
    },
  };
};

export default keystroke;
