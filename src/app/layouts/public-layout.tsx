import { Outlet } from "react-router-dom";

import PublicNavbar from "@/components/shared/navigation/public-navbar";
import PublicFooter from "@/components/shared/navigation/public-footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}