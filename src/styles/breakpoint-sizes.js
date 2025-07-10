/*
 * These breakpoint sizes must match those specified in CSS.
 */
export default {
  XS: "(max-width: 743.98px)",
  S: "(min-width: 744px) and (max-width: 1023.98px)",
  M: "(min-width: 1024px) and (max-width: 1239.98px)",
  L: "(min-width: 1240px) and (max-width: 1799.98px)",
  XL: "(min-width: 1800px)",
};

const breakpointNamesAndMaxWidths = [
  ["XS", 744],
  ["S", 1024],
  ["M", 1240],
  ["L", 1800],
  ["XL", Infinity],
];

export const getBreakpointName = (width) => {
  const [name] = breakpointNamesAndMaxWidths.find(([_, maxWidth]) => width < maxWidth);

  return name;
};
