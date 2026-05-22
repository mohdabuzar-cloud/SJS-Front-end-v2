import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "@/store/auth-store";
import { UserRole } from "@/types/auth";

interface Props {
  children: ReactNode;
  allowedRoles: UserRole[];
}

export default function RoleGuard({
  children,
  allowedRoles,
}: Props) {
  const user = useAuthStore((state) => state.user);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}