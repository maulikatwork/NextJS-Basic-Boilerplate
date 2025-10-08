import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Your Site Name",
  description:
    "The page you're looking for doesn't exist. Explore our latest content and find what you need.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4">404 - Page Not Found</h1>
        <p className="text-subtitle mb-8">
          {"The page you're looking for doesn't exist."}
        </p>

        <Link href="/" className="inline-block">
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
}
