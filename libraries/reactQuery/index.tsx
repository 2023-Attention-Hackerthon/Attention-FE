import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ReactQuerySettingProps = {
  children: ReactNode;
};

export const queryClient = new QueryClient();

export default function ReactQuerySetting({ children }: ReactQuerySettingProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
