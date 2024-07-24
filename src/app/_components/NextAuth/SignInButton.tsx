"use client";

import { signIn } from 'next-auth/react';

// Button to go to sign in page
export default function SignInButton() {
  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
}