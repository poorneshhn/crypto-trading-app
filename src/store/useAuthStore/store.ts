import { create } from "zustand";
import type { IAuthStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";
import type { NullableUser } from "../../types/types";

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      setUser: (user: NullableUser) => set(() => ({ user })),
      setToken: (token: string | null) => set(() => ({ token })),
      setAuthentication: (isAuthenticated: boolean) =>
        set(() => ({ isAuthenticated })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
