const svgModules = import.meta.glob("../Svgs/**/*.svg", { query: "?raw", import: "default" });

export const getIconSvg = (group: string, name: string): Promise<string> => {
  const path = `../Svgs/${group}/icon-${name}.svg`;
  const importFn = svgModules[path];

  if (!importFn) {
    return Promise.reject(new Error(`Icon not found at path: ${path}`));
  }

  return importFn() as Promise<string>;
};
