"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to monitoring service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4">Something went wrong!</h1>
        <p className="text-subtitle mb-8">
          {"We're sorry, but something unexpected happened."}
        </p>

        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
