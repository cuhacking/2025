"use client";

import React, { useState } from "react";
import { toast, Button } from "@payloadcms/ui";

const SuccessMessage: React.FC<{ logs: string[] }> = ({ logs }) => (
  <div>
    <p>🎉 Database seeded successfully! 🌱🐧</p>
    <ul>{logs?.map((log, index) => <li key={index}>{log}</li>)}</ul>
  </div>
);

export const SeedButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [seeded, setSeeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (seeded || loading) {
      toast.info(seeded ? "ℹ Database already seeded." : "⏳ Seeding in progress...");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/seed", { method: "POST", credentials: "include" });
      if (!res.ok) throw new Error((await res.json()).message || "An error occurred while seeding.");

      const data = await res.json();
      setSeeded(true);
      toast.success(<SuccessMessage logs={data.logs} />);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleClick} disabled={loading || seeded}>
        {seeded ? "🌱 Database Seeded 🐧" : loading ? "⏳ Seeding..." : "🚜 Seed Database"}
      </Button>
      {error && <p className="error-message">❌ {error}</p>}
    </>
  );
};
