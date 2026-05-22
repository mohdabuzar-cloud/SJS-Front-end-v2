import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  requestLoginOtp,
  verifyLoginOtp,
  fetchProfile,
} from "@/services/api/auth";

import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const navigate = useNavigate();

  const login = useAuthStore(
    (s) => s.login
  );

  const [input, setInput] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [otp, setOtp] =
    useState("");

  const [step, setStep] = useState<
    "credentials" | "otp"
  >("credentials");

  const [loading, setLoading] =
    useState(false);

  async function handleRequestOtp() {
    setLoading(true);

    try {
      await requestLoginOtp(
        input,
        password
      );

      setStep("otp");
    } catch {
      alert(
        "Invalid credentials or failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp() {
    setLoading(true);

    try {
      const auth =
        await verifyLoginOtp(
          input,
          otp
        );

      localStorage.setItem(
        "access_token",
        auth.token
      );

      localStorage.setItem(
        "refresh_token",
        auth.refreshToken
      );

      const profile =
        await fetchProfile();

      const user =
        profile.user ||
        profile.profile ||
        profile;

      login(
        user,
        auth.token,
        auth.refreshToken
      );

      if (auth.role === "/candidate/dashboard") {
        navigate(
          "/candidate/dashboard"
        );
      } else if (
        auth.role === "admin"
      ) {
        navigate(
          "/admin/dashboard"
        );
      } else {
        navigate(
          "/candidate/dashboard"
        );
      }
    } catch {
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white border rounded-2xl p-8 space-y-6">
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        {step === "credentials" && (
          <>
            <Input
              placeholder="Email or phone"
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Button
              className="w-full"
              onClick={
                handleRequestOtp
              }
              disabled={loading}
            >
              {loading
                ? "Sending OTP..."
                : "Continue"}
            </Button>
          </>
        )}

        {step === "otp" && (
          <>
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                )
              }
            />

            <Button
              className="w-full"
              onClick={
                handleVerifyOtp
              }
              disabled={loading}
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}