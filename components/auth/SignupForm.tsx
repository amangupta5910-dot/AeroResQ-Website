"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

export default function SignupForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    // Backend API next step

    const response = await fetch("/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    phone: form.phone,
    password: form.password,
  }),
});

const result = await response.json();

if (!response.ok) {
  alert(result.message);
  setLoading(false);
  return;
}

alert("Account Created Successfully");

router.push("/login");
  }

  const inputStyle =
    "w-full bg-transparent py-4 px-4 outline-none text-white placeholder:text-gray-500";

  return (
    <section className="flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-md"
      >
        <h2 className="text-4xl font-bold text-white">
          Create Account
        </h2>

        <p className="mt-3 text-gray-400">
          Join AeroResQ Platform
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Name */}

          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
            <User className="text-orange-500" size={20}/>
            <input
              name="name"
              required
              placeholder="Full Name"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Email */}

          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
            <Mail className="text-orange-500" size={20}/>
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Phone */}

          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
            <Phone className="text-orange-500" size={20}/>
            <input
              name="phone"
              required
              placeholder="+91 XXXXX XXXXX"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          {/* Password */}

          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
            <Lock className="text-orange-500" size={20}/>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              onChange={handleChange}
              className={inputStyle}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff className="text-gray-400"/>
              ) : (
                <Eye className="text-gray-400"/>
              )}
            </button>
          </div>

          {/* Confirm */}

          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
            <Lock className="text-orange-500" size={20}/>
            <input
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
              className={inputStyle}
            />
          </div>

          <button
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-orange-500 py-4 font-semibold text-white hover:bg-orange-600"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin"/>
                Creating...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-orange-400"
            >
              Login
            </Link>
          </p>

        </form>
      </motion.div>

    </section>
  );
}