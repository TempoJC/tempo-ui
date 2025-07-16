import "@testing-library/jest-dom";

// Mock de Icon para aislar las pruebas de la lógica interna del componente Icon.
jest.mock("@components/Atoms/Icons/Icon", () => ({
  Icon: jest.fn(({ group, name, className, ...props }) => (
    <svg
      data-testid={`mock-icon-${group}-${name}`}
      data-icon-group={group}
      data-icon-name={name}
      className={className}
      {...props}
    />
  )),
}));

// Mock de Loader para aislar las pruebas de la lógica interna del componente Loader.
jest.mock("@components/Feedback/Loader", () => ({
  Loader: jest.fn(({ className, size, color, ...props }) => (
    <div data-testid="mock-loader" className={className} data-loader-size={size} data-loader-color={color} {...props} />
  )),
}));
