import { apiClient } from "@/lib/api";
import { LoginForm } from "@hyt-sasaki/fetch_client_test";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

const login = ({ name, mail }: LoginForm): Promise<void> =>
  apiClient.loginPost({ name, mail });

type MutationFnType = typeof login;

type ErrorResponse = Response | Error;

type UseLoginOptions = {
  config?: MutationConfig<MutationFnType, ErrorResponse>;
};

export const useLogin = ({ config }: UseLoginOptions = {}) =>
  useMutation({
    ...config,
    mutationFn: login,
  });
