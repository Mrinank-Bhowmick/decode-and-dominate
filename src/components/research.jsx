"use client";
import React, { useState } from "react";
import tempImage from "../ASSETS/kiit-research-400x619.jpg";
import Image from "next/image";

const StatCard = ({ number, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${color} p-6 text-white rounded-lg text-center flex flex-col items-center transition-all duration-300 ${
        isHovered ? "transform -translate-y-2 shadow-xl" : "shadow-md"
      } cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`${description}, ${number}`}
    >
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm leading-tight">{description}</div>
    </div>
  );
};

const ResearchSpotlight = () => {
  const [hoveredImage1, setHoveredImage1] = useState(false);
  const [hoveredImage2, setHoveredImage2] = useState(false);

  return (
    <div className="w-full py-16 px-4 bg-white">
      {/* Header with glow effect */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="relative inline-block">
          <span className="text-green-500 text-2xl font-semibold relative z-10">
            Research Spotlight
          </span>
          <span className="absolute inset-0 bg-green-400 opacity-20 blur-lg -z-10 animate-pulse"></span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300"></div>
        </h2>
        <h1 className="text-4xl font-serif text-gray-800 mb-8 max-w-4xl">
          The world is evolving, and we are riding the wave with groundbreaking
          research at KIIT.
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                hoveredImage1 ? "transform scale-105 shadow-xl" : "shadow-md"
              }`}
              onMouseEnter={() => setHoveredImage1(true)}
              onMouseLeave={() => setHoveredImage1(false)}
            >
              <div className="aspect-[3/4]">
                <Image
                  src={tempImage}
                  alt="Student conducting laboratory research"
                  className="w-full h-full object-cover rounded-lg transform -rotate-6"
                  layout="fill"
                  objectFit="cover"
                />
                {hoveredImage1 && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 transition-opacity duration-300"></div>
                )}
              </div>
            </div>
            <div
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                hoveredImage2
                  ? "transform scale-105 shadow-xl translate-y-8"
                  : "shadow-md translate-y-12"
              }`}
              onMouseEnter={() => setHoveredImage2(true)}
              onMouseLeave={() => setHoveredImage2(false)}
            >
              <div className="aspect-[3/4]">
                <Image
                  src={tempImage}
                  alt="Student conducting laboratory research"
                  className="w-full h-full object-cover rounded-lg transform -rotate-6"
                  layout="fill"
                  objectFit="cover"
                />
                {hoveredImage2 && (
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-20 transition-opacity duration-300"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            KIIT is committed to high-quality research and provides outstanding
            facilities and a supportive environment for our academics and
            students. KIITs research portfolio extends across many different
            areas including, but not limited to, biotechnology, medicine; rural
            management; physical activity and nutrition; education; and social
            and mental health.
          </p>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              number="13636+"
              description="121 h – index (Scopus) Publications"
              color="bg-blue-500 hover:bg-blue-600"
            />
            <StatCard
              number="8404+"
              description="101 h – index (Web of Science) Publications"
              color="bg-emerald-500 hover:bg-emerald-600"
            />
            <StatCard
              number="810"
              description="National & International Patents"
              color="bg-amber-600 hover:bg-amber-700"
            />
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            At KIIT, cutting-edge research drives innovation and excellence
            across diverse fields. Our state-of-the-art facilities and dedicated
            research centers foster groundbreaking discoveries.
          </p>
          {/* Learn More Button */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Learn More About Our Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchSpotlight;
