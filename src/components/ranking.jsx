import React from "react";
import Image from "next/image";
import tempImage from "../ASSETS/KIIT-Times-Higher-Education-Ranking.jpg";

const rankingsData = [
  {
    title: "Ranked No. 1",
    description:
      "by Atal Ranking of Institution on innovation achievements, for the second time continuously.",
    extra: "Ranked 15",
    extraDescription: "Among All Public & Private Universities in India",
  },
  {
    title: "601-800",
    description: "in Times Higher Education World University Rankings 2024",
    extra: "168",
    extraDescription:
      "(10th best among Indian Universities) In Times Higher Education Young University Ranking 2024",
    extraRankings: [
      "147 in Times Higher Education Asia University Rankings 2023",
      "6th Rank in the Overall Category among Indian universities",
    ],
  },
  {
    title: "QS 5 Stars",
    description: "India’s first QS 5 Stars Rated University – 2021",
    extra: "257",
    extraDescription: "In QS World University Rankings : ASIA 2025",
    extraRankings: [
      "90th Rank in QS Asian University Rankings, Southern Asia 2024",
      "81st Rank in QS World University Rankings: Environmental Sustainability 2024",
    ],
  },
];

const RankingSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Rankings</h2>
        <a href="#" className="text-blue-600 hover:underline">
          All Rankings
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rankingsData.map((rank, index) => (
          <div
            key={index}
            className="rounded-lg p-6 border border-gray-200"
            style={{
              backgroundImage: `url(${tempImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "white",
              textShadow: "2px 2px 4px #000000",
            }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{rank.title}</h3>
              <p className="text-md">{rank.description}</p>

              {rank.extra && (
                <>
                  <h4 className="text-lg font-semibold">{rank.extra}</h4>
                  <p className="text-md">{rank.extraDescription}</p>
                </>
              )}

              {rank.extraRankings &&
                rank.extraRankings.map((extraRank, i) => (
                  <p key={i} className="text-md">
                    {extraRank}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RankingSection;
