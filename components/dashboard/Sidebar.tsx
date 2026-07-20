"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Plane,
  MapPinned,
  Siren,
  BarChart3,
  Users,
  FileBarChart2,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Drone Fleet",
    href: "/dashboard/drones",
    icon: Plane,
  },
  {
    title: "Live Missions",
    href: "/dashboard/missions",
    icon: MapPinned,
  },
  {
    title: "Emergency Alerts",
    href: "/dashboard/alerts",
    icon: Siren,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileBarChart2,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-white/10 bg-white/5 backdrop-blur-2xl">

      {/* Logo */}

      <div className="border-b border-white/10 px-6 py-8">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-black tracking-wide text-white">
              Aero<span className="text-orange-500">ResQ</span>
            </h1>

            <p className="mt-1 text-xs uppercase tracking-[3px] text-gray-400">
              Mission Control
            </p>

          </div>

          <button className="rounded-xl border border-white/10 p-2 transition hover:bg-white/10">

            <ChevronLeft size={18} />

          </button>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link key={item.title} href={item.href}>

              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </motion.div>

            </Link>
          );
        })}

      </nav>

      {/* User */}

      <div className="border-t border-white/10 p-5">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold">
              A
            </div>

            <div>

              <h3 className="font-semibold text-white">
                Admin
              </h3>

              <p className="text-sm text-gray-400">
                Mission Operator
              </p>

            </div>

          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 py-3 text-red-400 transition hover:bg-red-500/20">

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </aside>
  );
}