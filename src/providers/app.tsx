import * as React from "react";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback={<div>Spinner</div>}>
      <BrowserRouter>{children}</BrowserRouter>
    </React.Suspense>
  );
}
