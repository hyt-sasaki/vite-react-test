import { Configuration, DefaultApi } from "@hyt-sasaki/fetch_client_test";

export const BASE_PATH = "http://localhost:8888";
const config = new Configuration({
  basePath: BASE_PATH,
});
export const apiClient = new DefaultApi(config);
