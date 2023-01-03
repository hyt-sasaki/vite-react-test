import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

const getMe = () => apiClient.meGet();

type QueryFnType = typeof getMe;

type ErrorResponse = Response | Error;

type UseMeOptions = {
  config?: QueryConfig<QueryFnType, ErrorResponse>;
};

export const useMe = ({ config }: UseMeOptions = {}) =>
  useQuery<ExtractFnReturnType<QueryFnType>, ErrorResponse>({
    ...config,
    queryKey: ["me"],
    queryFn: getMe,
  });
