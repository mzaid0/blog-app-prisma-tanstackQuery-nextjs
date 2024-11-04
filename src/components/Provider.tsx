"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Provider: FC<ChildrenProp> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
