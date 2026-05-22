import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "@/app/guards/protected-route";

import PublicLayout from "@/app/layouts/public-layout";
import CandidateLayout from "@/app/layouts/candidate-layout";

import LoginPage from "@/modules/auth/pages/login-page";

import HomePage from "@/modules/public/pages/home-page";
import PublicJobsPage from "@/modules/public/pages/jobs-page";
import JobDetailsPage from "@/modules/public/pages/job-details-page";
import EmployersPage from "@/modules/public/pages/employers-page";
import CandidatesPage from "@/modules/public/pages/candidates-page";
import PricingPage from "@/modules/public/pages/pricing-page";

import DashboardPage from "@/modules/candidate/pages/dashboard-page";
import JobsPage from "@/modules/candidate/pages/jobs-page";
import AppliedJobsPage from "@/modules/candidate/pages/applied-jobs-page";
import SavedJobsPage from "@/modules/candidate/pages/saved-jobs-page";
import NotificationsPage from "@/modules/candidate/pages/notifications-page";
import MessagesPage from "@/modules/candidate/pages/messages-page";
import ProfilePage from "@/modules/candidate/pages/profile-page";
import SettingsPage from "@/modules/candidate/pages/settings-page";
import AccountPage from "@/modules/candidate/pages/account-page";

import AiCvBuilderPage from "@/modules/candidate/pages/ai-cv-builder-page";
import AiCvReviewPage from "@/modules/candidate/pages/ai-cv-review-page";
import AiCvTemplatesPage from "@/modules/candidate/pages/ai-cv-templates-page";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/jobs"
            element={<PublicJobsPage />}
          />

          <Route
            path="/jobs/:id"
            element={<JobDetailsPage />}
          />

          <Route
            path="/employers"
            element={<EmployersPage />}
          />

          <Route
            path="/candidates"
            element={<CandidatesPage />}
          />

          <Route
            path="/pricing"
            element={<PricingPage />}
          />
        </Route>

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/candidate"
          element={
            <ProtectedRoute>
              <CandidateLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="jobs"
            element={<JobsPage />}
          />

          <Route
            path="applied-jobs"
            element={
              <AppliedJobsPage />
            }
          />

          <Route
            path="saved-jobs"
            element={
              <SavedJobsPage />
            }
          />

          <Route
            path="notifications"
            element={
              <NotificationsPage />
            }
          />

          <Route
            path="settings"
            element={<SettingsPage />}
          />

          <Route
            path="account"
            element={<AccountPage />}
          />

          <Route
            path="ai-cv"
            element={
              <AiCvBuilderPage />
            }
          />

          <Route
            path="ai-cv/review"
            element={
              <AiCvReviewPage />
            }
          />

          <Route
            path="ai-cv/templates"
            element={
              <AiCvTemplatesPage />
            }
          />

          <Route
            path="messages"
            element={<MessagesPage />}
          />

          <Route
            path="profile"
            element={<ProfilePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}