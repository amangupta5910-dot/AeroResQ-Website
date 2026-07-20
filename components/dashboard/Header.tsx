"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";

import {
  Bell,
  Search,
  Activity,
  Wifi,
  LogOut,
} from "lucide-react";

export default function Header() {
  const router = useRouter();

  const { user, loading } = useCurrentUser();

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
    router.refresh();
  }

  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div>
        <p className="text-sm uppercase tracking-[4px] text-orange-400">
          AeroResQ Mission Control
        </p>

        <h1 className="mt-2 text-4xl font-black text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Monitor drones, emergency alerts and AI operations in real time.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-4">
        {/* Search */}

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-44 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        {/* Status */}

        <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3">
          <Wifi
            size={18}
            className="text-green-400"
          />

          <span className="text-sm font-medium text-green-400">
            System Online
          </span>
        </div>

        {/* Activity */}

        <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Activity size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-green-500"></span>
        </button>

        {/* Notification */}

        <button className="relative rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Bell size={20} />

          <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        {/* Profile */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 font-bold text-white">
            {loading
              ? "..."
              : user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>
            <h4 className="font-semibold text-white">
              {loading ? "Loading..." : user?.name}
            </h4>

            <p className="text-xs text-gray-400">
              {loading ? "" : user?.role}
            </p>
          </div>
        </motion.div>

        {/* Logout */}

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}