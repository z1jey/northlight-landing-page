import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { Navbar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    //main layout
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
