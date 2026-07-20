"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCards from "./StatsCards";
import LiveMap from "./LiveMap";
import ActiveMissions from "./ActiveMissions";
import EmergencyAlerts from "./EmergencyAlerts";
import AIAnalytics from "./AIAnalytics";
import WeatherWidget from "./WeatherWidget";
import MissionTimeline from "./MissionTimeline";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";
import SystemStatus from "./SystemStatus";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <section className="flex-1 p-8">

          <Header />

          <div className="mt-8">

            <StatsCards />

          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">

            {/* Left */}

            <div className="space-y-6 xl:col-span-2">

              <LiveMap />

              <EmergencyAlerts />

              <WeatherWidget />

              <QuickActions />

            </div>

            {/* Right */}

            <div className="space-y-6">

              <ActiveMissions />

              <AIAnalytics />

              <MissionTimeline />

              <RecentActivities />

              <SystemStatus />

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}