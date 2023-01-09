import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from "react-query";

export const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

type FnType = (...args: any) => any;

export type ExtractFnReturnType<FT extends FnType> = Awaited<
  Promise<ReturnType<FT>>
>;

export type QueryConfig<QueryFnType extends FnType, TError> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>, TError>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends FnType,
  TError
> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  TError,
  Parameters<MutationFnType>[0]
>;
