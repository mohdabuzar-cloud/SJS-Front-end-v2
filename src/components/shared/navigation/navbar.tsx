import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">
          SecondJobSearch
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-slate-500" />
        <Bell className="w-5 h-5 text-slate-500" />
      </div>
    </header>
  );
}