import { create } from "zustand";
import { User } from "@/types/user";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  clearIsAuth: () => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  clearIsAuth: () => set({ user: null, isAuthenticated: false }),
}));
