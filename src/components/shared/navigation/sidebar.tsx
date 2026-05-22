import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  User,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/candidate/dashboard",
  },
  {
    label: "Jobs",
    icon: Briefcase,
    href: "/candidate/jobs",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/candidate/messages",
  },
  {
    label: "Profile",
    icon: User,
    href: "/candidate/profile",
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col">
      <div className="h-16 border-b flex items-center px-6">
        <span className="font-bold text-lg">
          Candidate Panel
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 transition"
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}