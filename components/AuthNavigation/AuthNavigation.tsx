"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";
import css from "./AuthNavigation.module.css";
import { logout } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";

export default function AuthNavigation() {
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    clearAuth();
    router.push("/sign-in");
  };
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  if (!isAuthenticated) {
    return (
      <>
        <li className={css.navigationItem}>
          <Link href="/sign-in" className={css.navigationLink}>
            Login
          </Link>
        </li>
        <li className={css.navigationItem}>
          <Link href="/sign-up" className={css.navigationLink}>
            Sign up
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <li className={css.navigationItem}>
        <Link href="/profile" className={css.navigationLink}>
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}>{user?.email}</p>
        <button className={css.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  );
}
