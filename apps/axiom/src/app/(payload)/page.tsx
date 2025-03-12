import { redirect } from 'next/navigation';

export default function Home() {
  return redirect(
    process.env.NODE_ENV === 'development'
      ? process.env.CUHACKING_2025_PORTAL_LOCAL_URL
      : process.env.CUHACKING_2025_PORTAL_PUBLIC_URL
  );
}
