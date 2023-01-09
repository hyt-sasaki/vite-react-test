import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { MeDto } from "@hyt-sasaki/fetch_client_test";
import { BASE_PATH } from "@/lib/api";
import { Requester } from "./Requester";

const meta = {
  title: "Features/Requester",
  component: Requester,
} satisfies Meta<typeof Requester>;

export default meta;

type Story = StoryObj<typeof meta>;

const path = `${BASE_PATH}/me`;
export const Success: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get<MeDto>(path, (req, res, ctx) =>
          res(
            ctx.json({
              id: 1,
              name: "John",
            })
          )
        ),
      ],
    },
  },
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get<MeDto>(path, (req, res, ctx) =>
          res(ctx.delay(1000 * 60 * 60 * 60))
        ),
      ],
    },
  },
};
export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get<MeDto>(path, (req, res, ctx) => res(ctx.status(400))),
      ],
    },
  },
};
