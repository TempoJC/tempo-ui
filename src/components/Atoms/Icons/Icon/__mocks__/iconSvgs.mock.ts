export const getIconSvg = jest.fn((group: string, name: string) => {
  return Promise.resolve(`<svg data-mock-icon="${group}-${name}"></svg>`);
});
