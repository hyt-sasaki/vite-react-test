import { rest } from "msw";
import { LoginForm, MeDto } from "@hyt-sasaki/fetch_client_test";
import { BASE_PATH } from "@/lib/api";

export const handlers = [
  rest.get(`${BASE_PATH}/health`, (req, res, ctx) => res(ctx.status(200))),
  rest.post<LoginForm>(`${BASE_PATH}/login`, async (req, res, ctx) => {
    const { name, mail } = await req.json<LoginForm>();
    sessionStorage.setItem("account_name", name);
    sessionStorage.setItem("account_mail", mail);
    return res(ctx.status(200));
  }),
  rest.get(`${BASE_PATH}/me`, (req, res, ctx) => {
    const name = sessionStorage.getItem("account_name") ?? "guest";
    const body: MeDto = {
      id: 1,
      name,
    };

    return res(ctx.status(200), ctx.json(body));
  }),
];
