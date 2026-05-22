import DashboardStatCard from "@/modules/candidate/components/dashboard-stat-card";
import { useCandidateDashboard } from "@/modules/candidate/hooks/use-candidate-dashboard";

export default function DashboardPage() {
  const { data, isLoading } =
    useCandidateDashboard();

  const profile =
    data?.user ||
    data?.profile ||
    data;

  if (isLoading) {
    return (
      <div className="p-8">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      {/* Welcome */}
      <div className="bg-white border rounded-2xl p-8">
        <h1 className="text-3xl font-bold">
          Welcome back,
          {" "}
          {profile?.fullName || "User"}
        </h1>

        <p className="mt-3 text-slate-600">
          Manage your job applications and profile.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardStatCard
          title="Applied Jobs"
          value={0}
        />

        <DashboardStatCard
          title="Saved Jobs"
          value={0}
        />

        <DashboardStatCard
          title="Interviews"
          value={0}
        />
      </div>

      {/* Activity */}
      <div className="bg-white border rounded-2xl p-8">
        <h2 className="text-2xl font-semibold">
          Recent Activity
        </h2>

        <p className="mt-4 text-slate-500">
          Activity module coming next.
        </p>
      </div>
    </div>
  );
}