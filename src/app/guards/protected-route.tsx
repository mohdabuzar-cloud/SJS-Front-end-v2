import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

import { useAuthStore } from "@/store/auth-store";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const isAuthenticated = useAuthStore(
    (s) => s.isAuthenticated
  );

  const isLoading = useAuthStore(
    (s) => s.isLoading
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}