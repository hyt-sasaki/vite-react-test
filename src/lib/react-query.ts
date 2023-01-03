import { DefaultOptions, QueryClient, UseQueryOptions } from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  Promise<ReturnType<FnType>>
>;

export type QueryConfig<
  QueryFnType extends (...args: any) => any,
  TError
> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>, TError>,
  "queryKey" | "queryFn"
>;
