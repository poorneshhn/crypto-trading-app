import type { NullableUser } from "../../types/types";

export interface IAuthStore {
  user: NullableUser;
  token: null | string;
  isAuthenticated: boolean;
  setUser: (user: NullableUser) => void;
  setAuthentication: (isAuthenticated: boolean) => void;
  setToken: (token: string | null) => void;
}
