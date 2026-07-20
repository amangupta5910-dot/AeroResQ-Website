import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-6 text-white">
      <h1 className="text-7xl font-bold text-orange-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-center text-gray-400">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
      >
        Back to Home
      </Link>
    </main>
  );
}