import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "../ASSETS/KIIT-Times-Higher-Education-Ranking.jpg";

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="KIIT Students"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Heading with Gradient */}
          <h1 className="bg-gradient-to-r from-[#00B4DB] to-[#0BE881] bg-clip-text text-6xl font-bold text-transparent sm:text-7xl">
            KIITEE 2025
          </h1>

          {/* Subheadings */}
          <div className="space-y-2 text-white">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Empowering <span className="font-bold">MINDS</span>
            </h2>
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Nurturing <span className="font-bold">LEADERS</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-200">
            Get Your Career Started at KIIT
          </p>

          {/* CTA Button */}
          <Link
            href="/apply"
            className="inline-block rounded-md bg-gradient-to-r from-[#00B4DB] to-[#0BE881] px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20">
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20">
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}
