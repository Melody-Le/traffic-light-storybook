import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["green", "yellow", "red"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

/** This is How it look Like*/
export const Base: Story = {
  args: {
    variant: "green",
  },
};
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};
export const Red: Story = {
  args: {
    variant: "red",
  },
};

// Create custom setting for user:
/** This is Whatever*/

export const Another: Story = {
  args: {
    variant: "red",
  },
  render: (args) => <Light variant="red" />,
};

export const Grouped: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          border: "1px solid black",
          width: "max-content",
          padding: 10,
        }}
      >
        <Light variant="red" />
        <Light variant="yellow" />
        <Light variant="green" />
      </div>
    );
  },
};
