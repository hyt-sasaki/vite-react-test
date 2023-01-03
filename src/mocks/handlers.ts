import { rest } from "msw";
import { GetMeResponse } from "@hyt-sasaki/fetch_client_test";
import { BASE_PATH } from "@/lib/api";

export const handlers = [
  rest.get(`${BASE_PATH}/health`, (req, res, ctx) => res(ctx.status(200))),
  rest.get(`${BASE_PATH}/me`, (req, res, ctx) => {
    const body: GetMeResponse = {
      id: 1,
      name: "hyt-sasaki",
    };

    return res(ctx.status(200), ctx.json(body));
  }),
];
