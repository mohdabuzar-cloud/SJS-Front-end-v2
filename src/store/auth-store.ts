import { create } from "zustand";
import type { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (
    user: User,
    token: string,
    refreshToken: string
  ) => void;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(
  (set) => ({
    user: null,
    token: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem(
      "refresh_token"
    ),
    isAuthenticated:
      !!localStorage.getItem("access_token"),
    isLoading: true,

    login: (user, token, refreshToken) => {
      localStorage.setItem(
        "access_token",
        token
      );

      localStorage.setItem(
        "refresh_token",
        refreshToken
      );

      set({
        user,
        token,
        refreshToken,
        isAuthenticated: true,
      });
    },

    setUser: (user) =>
      set({
        user,
      }),

    setLoading: (loading) =>
      set({
        isLoading: loading,
      }),

    logout: () => {
      localStorage.removeItem(
        "access_token"
      );

      localStorage.removeItem(
        "refresh_token"
      );

      set({
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
      });
    },
  })
);