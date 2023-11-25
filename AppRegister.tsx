import React, { ReactNode } from "react";
import ReactQuerySetting from "./libraries/reactQuery";

type AppRegisterProps = { children: ReactNode };

export default function AppRegister({ children }: AppRegisterProps) {
  return <ReactQuerySetting>{children}</ReactQuerySetting>;
}
