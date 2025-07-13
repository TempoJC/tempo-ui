import { userEvent } from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import Avatar from "../Avatar";

describe("@tempo-ui/ContentDisplay/Avatar", () => {
  it("renders", () => {
    const { asFragment } = render(<Avatar initials="JG" imageUrl="http://some.avatar/url" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the additional className", () => {
    const { container } = render(<Avatar initials="JG" className="customClass" />);

    expect(container.querySelector(".tempo-avatar")).toHaveClass("customClass");
  });

  it("renders in dark theme", () => {
    const { asFragment } = render(<Avatar initials="JG" color="dark" />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("outlined type", () => {
    it("sets the outlined type", () => {
      const { container } = render(<Avatar initials="JG" type="outlined" />);

      expect(container.querySelector(".tempo-avatar--outlined")).toBeInTheDocument();
    });
  });

  describe("imageUrl", () => {
    describe("when provided", () => {
      it("renders an image", () => {
        const { container } = render(<Avatar initials="JG" imageUrl="http://some.avatar/url" />);

        const img = container.querySelector(".tempo-avatar__image");
        expect(img).toBeInTheDocument();
        expect(img).toHaveStyle({ backgroundImage: "url(http://some.avatar/url)" });
        expect(img).toHaveAttribute("title", "JG");
      });
    });

    describe("when not provided", () => {
      beforeEach(() => {
        jest.spyOn(global, "Image" as any).mockImplementation(() => {
          return {} as HTMLImageElement;
        });
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it("renders the initials and does not try to load the image", () => {
        render(<Avatar initials="JG" />);

        expect(screen.queryByText("JG")).toBeInTheDocument();

        expect(global.Image).not.toHaveBeenCalled();
      });
    });

    describe("when image fails to load", () => {
      let originalImageSrcSetter: PropertyDescriptor;

      beforeEach(() => {
        const descriptor = Object.getOwnPropertyDescriptor(global.Image.prototype, "src");
        if (descriptor) {
          originalImageSrcSetter = descriptor;
        } else {
          originalImageSrcSetter = {} as PropertyDescriptor; // Fallback
        }

        Object.defineProperty(global.Image.prototype, "src", {
          set(this: HTMLImageElement, v: string) {
            setTimeout(() => this.onerror?.(new Event("error")));
          },
        });
      });

      afterEach(() => {
        Object.defineProperty(global.Image.prototype, "src", originalImageSrcSetter);
      });

      it("renders initials", async () => {
        render(<Avatar imageUrl="invalid-image-url.png" initials="JG" testId="avatar" />);

        const initialsElement = await waitFor(() => screen.getByTestId("avatar-initials"));

        expect(initialsElement).toHaveTextContent("JG");
        expect(screen.queryByTestId("avatar-image")).not.toBeInTheDocument();
      });

      it("handles URL changes", async () => {
        const originalImageSrcSetter = Object.getOwnPropertyDescriptor(global.Image.prototype, "src");
        if (!originalImageSrcSetter) {
          throw new Error("No se pudo obtener el descriptor de la propiedad 'src' de Image.prototype");
        }

        let resolveOnLoad: ((value: unknown) => void) | undefined;
        const loadPromise = new Promise((res) => {
          resolveOnLoad = res;
        });

        let errorFired = false;

        Object.defineProperty(global.Image.prototype, "src", {
          set(this: HTMLImageElement, v: string) {
            setTimeout(() => {
              if (v.startsWith("valid")) {
                this.onload?.(new Event("load"));
                resolveOnLoad?.(undefined);
              } else {
                loadPromise.then(() => {
                  this.onerror?.(new Event("error"));
                  errorFired = true;
                });
              }
            });
          },
        });

        // initial render with an invalid image
        const { rerender } = render(<Avatar imageUrl="invalid-image-url.png" initials="JG" testId="avatar" />);

        // rerender with a valid image
        rerender(<Avatar imageUrl="valid-image-url.png" initials="JG" testId="avatar" />);

        const avatarImage = await screen.findByTestId("avatar-image");
        expect(avatarImage).toBeInTheDocument();

        // Wait until the error has been fired, which would
        // render the initials if the logic is not working
        await waitFor(() => expect(errorFired).toBe(true));

        expect(screen.queryByTestId("avatar-initials")).not.toBeInTheDocument();

        Object.defineProperty(global.Image.prototype, "src", originalImageSrcSetter);
      });
    });
  });

  describe("size is large", () => {
    it("renders in large size with image", () => {
      const { asFragment } = render(
        <Avatar initials="JG" color="dark" size="large" imageUrl="http://some.avatar/url" />,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders in large size with initials", () => {
      const { asFragment } = render(<Avatar initials="JG" color="dark" size="large" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("size is medium", () => {
    it("renders in medium size with image", () => {
      const { asFragment } = render(
        <Avatar initials="JG" color="dark" size="medium" imageUrl="http://some.avatar/url" />,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders in medium size with initials", () => {
      const { asFragment } = render(<Avatar initials="JG" color="dark" size="medium" />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("when onClick is set", () => {
    it("is executed when the Avatar is clicked", async () => {
      const clickHandler = jest.fn();
      const { container } = render(<Avatar initials="JG" onClick={clickHandler} />);

      const avatar = container.querySelector(".tempo-avatar");
      if (avatar) {
        await userEvent.click(avatar);
      } else {
        throw new Error("Avatar element not found.");
      }

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it("adds a special className to the component", () => {
      const { container } = render(<Avatar initials="JG" onClick={() => {}} />);

      expect(container.querySelector(".tempo-avatar--clickable")).toBeInTheDocument();
    });
  });

  describe("testId prop", () => {
    it("renders the avatar with the specified data-testid attribute", () => {
      const { getByTestId } = render(<Avatar initials="JG" testId="avatar" />);
      const element = getByTestId("avatar");
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("data-testid", "avatar");
    });
  });
});
