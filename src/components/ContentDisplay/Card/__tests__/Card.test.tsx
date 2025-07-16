import { render, screen } from "@testing-library/react";
import Card from "../Card";
import Header from "../Card.header";
import HeaderImage from "../Card.header-image";
import HeaderContent from "../Card.header-content";
import ContentImage from "../Card.content-image";
import Footer from "../Card.footer";

describe("@tempo-ui/ContentDisplay/Card", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Card className="customCardClass">
        <Header className="customHeaderClass">
          <HeaderImage src="https://picsum.photos/id/237/200/300" className="customHeaderImageClass" />
          <HeaderContent className="customHeaderContentClass">Lorem ipsum dolor sit amet.</HeaderContent>
        </Header>
        <ContentImage className="customContentImageClass" src="https://picsum.photos/id/1084/536/354" />
        <Footer className="customFooterClass">Footer content</Footer>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("sets dark color", () => {
    render(<Card color="dark" testId="card" />);
    expect(screen.getByTestId("card")).toHaveClass("tempo-card-wrapper--dark");
  });

  it("sets outlined type", () => {
    render(<Card kind="outlined" testId="card" />);
    expect(screen.getByTestId("card")).toHaveClass("tempo-card-wrapper--outlined");
  });

  describe("testId prop", () => {
    it("renders the Card and its children with the specified data-testid attributes", () => {
      render(
        <Card testId="card">
          <Header testId="card-header">
            <HeaderImage src="https://picsum.photos/id/237/200/300" testId="card-header-image" />
            <HeaderContent testId="card-header-content">Lorem ipsum dolor sit amet.</HeaderContent>
          </Header>
          <ContentImage testId="card-content-image" src="https://picsum.photos/id/1084/536/354" />
          <Footer testId="card-footer">Footer content</Footer>
        </Card>,
      );

      const cardElement = screen.getByTestId("card");
      expect(cardElement).toBeInTheDocument();
      expect(cardElement).toHaveAttribute("data-testid", "card");

      const headerElement = screen.getByTestId("card-header");
      expect(headerElement).toBeInTheDocument();
      expect(headerElement).toHaveAttribute("data-testid", "card-header");

      const headerImageElement = screen.getByTestId("card-header-image");
      expect(headerImageElement).toBeInTheDocument();
      expect(headerImageElement).toHaveAttribute("data-testid", "card-header-image");

      const headerContentElement = screen.getByTestId("card-header-content");
      expect(headerContentElement).toBeInTheDocument();
      expect(headerContentElement).toHaveAttribute("data-testid", "card-header-content");

      const contentImageElement = screen.getByTestId("card-content-image");
      expect(contentImageElement).toBeInTheDocument();
      expect(contentImageElement).toHaveAttribute("data-testid", "card-content-image");

      const footerElement = screen.getByTestId("card-footer");
      expect(footerElement).toBeInTheDocument();
      expect(footerElement).toHaveAttribute("data-testid", "card-footer");
    });
  });
});
