import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("renders with title and children", () => {
    render(<Card title="Test Card">This is the content.</Card>);
    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("This is the content.")).toBeInTheDocument();
  });
});
