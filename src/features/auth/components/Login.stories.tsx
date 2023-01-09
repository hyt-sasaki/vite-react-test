import { Meta, StoryObj } from "@storybook/react";
import { fireEvent, userEvent, within } from "@storybook/testing-library";
import { LoginTemplate } from "./Login";

const meta = {
  title: "Features/Login",
  component: LoginTemplate,
} satisfies Meta<typeof LoginTemplate>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Empty: Story = {};

export const Interact: Story = {};
Interact.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const nameField = await canvas.findByLabelText("Name:");
  userEvent.type(nameField, "John");

  const mailField = await canvas.findByLabelText("Email:");
  userEvent.type(mailField, "test@example.com");

  const submitButton = await canvas.findByRole("button");
  fireEvent.click(submitButton);
};
