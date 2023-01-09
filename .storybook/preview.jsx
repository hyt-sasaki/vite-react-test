import React from "react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryConfig } from "../src/lib/react-query.js";

initialize();

const queryClientDecorator = (Story) => {
  const queryClient = new QueryClient({
    defaultOptions: queryConfig,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Story />
    </QueryClientProvider>
  );
};
export const decorators = [queryClientDecorator, mswDecorator];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
