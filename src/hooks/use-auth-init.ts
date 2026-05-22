import { useEffect } from "react";

import { fetchProfile } from "@/services/api/auth";
import { useAuthStore } from "@/store/auth-store";

export function useAuthInit() {
  const token = useAuthStore(
    (s) => s.token
  );

  const setUser = useAuthStore(
    (s) => s.setUser
  );

  const setLoading = useAuthStore(
    (s) => s.setLoading
  );

  useEffect(() => {
    async function init() {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const profile =
          await fetchProfile();

        setUser(
          profile.user ||
            profile.profile ||
            profile
        );
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [token, setUser, setLoading]);
}