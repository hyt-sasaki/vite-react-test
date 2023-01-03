import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const FallBack = () => {
  // eslint-disable-next-line no-console
  console.log("Fall back!!!");
  return <div>Spinner</div>;
};

type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense fallback={FallBack()}>
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE === "development" && <ReactQueryDevtools />}
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </React.Suspense>
);
