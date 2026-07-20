"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  href: string;
}

export default function ProductCard({
  title,
  subtitle,
  image,
  badge,
  price,
  href,
}: ProductProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-[#0B1220] border border-white/10 hover:border-orange-500 transition-all">

      {/* Badge */}

      <div className="flex justify-between px-6 pt-6">

        <div>

          <h2 className="text-3xl font-bold">

            {title}

          </h2>

          <p className="text-gray-400 mt-2">

            {subtitle}

          </p>

        </div>

        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full">

          {badge}

        </span>

      </div>

      {/* Image */}

      <div className="relative h-[350px]">

        <Image
          src={image}
          fill
          className="object-contain p-10"
          alt={title}
        />

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between p-6 border-t border-white/10">

        <div>

          <p className="text-gray-400">

            Starting at

          </p>

          <h2 className="text-4xl font-bold text-orange-500">

            {price}

          </h2>

        </div>

        <Link
          href={href}
          className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
        >

          View Details →

        </Link>

      </div>

    </div>
  );
}