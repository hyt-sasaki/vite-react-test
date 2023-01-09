import { apiClient, ErrorResponse } from "@/lib/api";
import { QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";
import { MeDto } from "@hyt-sasaki/fetch_client_test";

const getMe = () => apiClient.meGet();

type QueryFnType = typeof getMe;

type UseMeOptions = {
  config?: QueryConfig<QueryFnType, ErrorResponse>;
};

export const useMe = ({ config }: UseMeOptions = {}) =>
  useQuery<MeDto, ErrorResponse>({
    ...config,
    queryKey: ["me"],
    queryFn: getMe,
  });
