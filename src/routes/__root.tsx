import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { Navbar } from "@/components/nav-bar";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
