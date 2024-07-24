"use client";

import { signOut } from 'next-auth/react';

// Page for signing in
const SignOutButton = () => {
	return (
		<button onClick={() => signOut()}>
			Sign Out
		</button>
	)
}

export default SignOutButton;