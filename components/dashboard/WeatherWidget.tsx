"use client";

import { motion } from "framer-motion";
import {
  CloudSun,
  Wind,
  Droplets,
  Eye,
  Thermometer,
} from "lucide-react";

const weather = {
  location: "Gorakhpur",
  temperature: "29°C",
  condition: "Partly Cloudy",
  humidity: "64%",
  wind: "18 km/h",
  visibility: "10 km",
};

export default function WeatherWidget() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Weather
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Mission Area Conditions
          </p>

        </div>

        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <CloudSun
            size={34}
            className="text-yellow-400"
          />
        </motion.div>

      </div>

      {/* Temperature */}

      <div className="mt-8 flex items-center justify-between">

        <div>

          <h2 className="text-5xl font-black text-white">
            {weather.temperature}
          </h2>

          <p className="mt-2 text-gray-400">
            {weather.condition}
          </p>

          <p className="mt-1 text-sm text-orange-400">
            📍 {weather.location}
          </p>

        </div>

        <div className="rounded-full border border-orange-500/20 bg-orange-500/10 p-6">

          <Thermometer
            size={38}
            className="text-orange-400"
          />

        </div>

      </div>

      {/* Weather Details */}

      <div className="mt-10 space-y-5">

        <WeatherRow
          icon={<Droplets className="text-cyan-400" size={18} />}
          label="Humidity"
          value={weather.humidity}
        />

        <WeatherRow
          icon={<Wind className="text-green-400" size={18} />}
          label="Wind Speed"
          value={weather.wind}
        />

        <WeatherRow
          icon={<Eye className="text-purple-400" size={18} />}
          label="Visibility"
          value={weather.visibility}
        />

      </div>

    </section>
  );
}

type WeatherRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function WeatherRow({
  icon,
  label,
  value,
}: WeatherRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">

      <div className="flex items-center gap-3">

        {icon}

        <span className="text-gray-300">
          {label}
        </span>

      </div>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}