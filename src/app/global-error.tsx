"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="container min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Application Error</h1>
            <p className="text-subtitle mb-8">
              Something went wrong with the application.
            </p>
            <button
              onClick={reset}
              style={{ backgroundColor: "var(--color-error)" }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
