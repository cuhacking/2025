"use client";

import React, { Fragment, useCallback, useState } from "react";
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
  const [error, setError] = useState<null | string>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (seeded) {
        toast.info("ℹ Database already seeded.");
        return;
      }
      if (loading) {
        toast.info("⏳ Seeding already in progress...");
        return;
      }
      if (error) {
        toast.error(`❌ Error: ${error}. Please refresh and try again.`);
        return;
      }

      setLoading(true);

      try {
        toast.promise(
          fetch("/api/seed", { method: "POST", credentials: "include" })
            .then(async (res) => {
              if (!res.ok) {
                const errorData = await res.json();
                throw new Error(
                  errorData.message || "An error occurred while seeding.",
                );
              }
              return res.json();
            })
            .then((data) => {
              setSeeded(true);
              setError(null);
              setLogs(data.logs);
              toast.success(<SuccessMessage logs={data.logs} />);
            }),
          {
            loading: "🚜⏳ Seeding database...",
            error: "❌ An error occurred while seeding.",
          },
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error";
        setError(errorMessage);
        toast.error(`❌ ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    },
    [loading, seeded, error],
  );

  return (
    <Fragment>
      <Button onClick={handleClick} disabled={loading || seeded}>
        {loading
          ? "⏳ Seeding..."
          : seeded
            ? "🌱 Database Seeded 🐧"
            : "🚜 Seed Database"}
      </Button>
      {error && <p className="error-message">❌ {error}</p>}
    </Fragment>
  );
};
