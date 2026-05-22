import { ReactNode } from "react";
import { useAuthInit } from "@/hooks/use-auth-init";

interface Props {
  children: ReactNode;
}

export default function AuthProvider({
  children,
}: Props) {
  useAuthInit();

  return <>{children}</>;
}