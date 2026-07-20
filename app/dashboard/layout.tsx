import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | AeroResQ",
  description:
    "AeroResQ AI Emergency Response Command Center Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}