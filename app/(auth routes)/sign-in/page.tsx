"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";

import { useAuthStore } from "@/lib/store/authStore";
import { login, type AuthData } from "@/lib/api/clientApi";
import css from "./SignInPage.module.css";

const SignIn = () => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    try {
      setError("");

      const formValues: AuthData = {
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      };

      const res = await login(formValues);

      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      if (isAxiosError<{ error: string }>(error)) {
        setError(error.response?.data?.error ?? error.message);
        return;
      }

      setError("Oops... some error");
    }
  };

  return (
    <main className={css.mainContent}>
      <form className={css.form} action={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
  );
};

export default SignIn;
