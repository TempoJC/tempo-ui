const svgModules = import.meta.glob("../Svgs/**/*.svg", { as: "raw" });

export const getIconSvg = (group: string, name: string): Promise<string> => {
  const path = `../Svgs/${group}/icon-${name}.svg`;
  const importFn = svgModules[path];

  if (!importFn) {
    return Promise.reject(new Error(`Icon not found at path: ${path}`));
  }

  return importFn();
};
