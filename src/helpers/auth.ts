import type { IUser } from "../types/types";
import { getVariable } from "./environment.utils";
import { SignJWT, jwtVerify } from "jose";

export const createToken = async ({email, password}: IUser) => {
  // Secret needs to be a Uint8Array, not a string
  const secret = new TextEncoder().encode(getVariable("VITE_ENV_SECRET"));

  const token = await new SignJWT({email, password})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(secret);

  return token;
}

export const verifyToken = async (token: string | null) => {
  if(!token) return null;
  try {
    const secret = new TextEncoder().encode(getVariable("VITE_ENV_SECRET"));
    const { payload } = await jwtVerify(token, secret);
    return payload;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}