import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardHeaderImage, CardHeaderContent, CardContentImage, CardFooter } from "@/components";

const meta: Meta<typeof Card> = {
  title: "ContentDisplay/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: ["default", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    children: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
    ),
  },
};

export const Outlined: Story = {
  args: {
    kind: "outlined",
    children: (
      <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
    ),
  },
};

export const Dark: Story = {
  args: {
    color: "dark",
    children: (
      <Card>
        <CardHeader>
          <CardHeaderImage src="https://picsum.photos/id/237/200/300" />
          <CardHeaderContent>Lorem ipsum dolor sit amet.</CardHeaderContent>
        </CardHeader>
        <CardContentImage src="https://picsum.photos/id/1084/536/354" />
        <CardFooter>Footer content</CardFooter>
      </Card>
    ),
  },
};
