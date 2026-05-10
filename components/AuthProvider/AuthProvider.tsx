"use client";

import { useEffect } from "react";
import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearAuth = useAuthStore((state) => state.clearIsAuth);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await checkSession();

      if (session.success) {
        const user = await getMe();
        setUser(user);
      } else {
        clearAuth();
      }
    };

    fetchUser();
  }, [setUser, clearAuth]);

  return children;
}
