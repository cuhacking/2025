"use client";

import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
}