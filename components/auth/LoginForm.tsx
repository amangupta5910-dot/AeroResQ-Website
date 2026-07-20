"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Loader2,
} from "lucide-react";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Login Failed");
        return;
      }

      console.log("Before Redirect");

router.replace("/dashboard");

console.log("After Redirect");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <h2 className="text-4xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-gray-400">
          Login to your AeroResQ Dashboard
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          {/* Email */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
              <Mail
                size={20}
                className="text-orange-500"
              />

              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
              <Lock
                size={20}
                className="text-orange-500"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff
                    size={20}
                    className="text-gray-400"
                  />
                ) : (
                  <Eye
                    size={20}
                    className="text-gray-400"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={remember}
                onChange={() =>
                  setRemember(!remember)
                }
                className="accent-orange-500"
              />

              Remember Me
            </label>

            <Link
              href="/forgot-password"
              className="text-sm text-orange-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2
                  size={20}
                  className="mr-2 animate-spin"
                />
                Logging In...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Signup */}

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-orange-400 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}