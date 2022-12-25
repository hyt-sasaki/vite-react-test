import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { Sample } from "@/features/sample";
import { MainLayout } from "@/components/Layout";
import { Suspense } from "react";

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<div>main layout spinner</div>}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}
export function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [{ path: "/", element: <Sample /> }],
    },
  ]);
}
