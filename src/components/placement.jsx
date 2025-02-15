import Image from "next/image";
import tempImage from "../ASSETS/Placement_Web_compressed-800x560.jpg";

export default function PlacementHighlights() {
  return (
    <section className="bg-green-600 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Making You Industry-Ready: Where Top Recruiters Meet Exceptional
          Talent
        </h2>
        <p className="mt-4 text-lg">
          Our dedicated Training and Placement Cell works tirelessly to ensure
          that every student is well-prepared and has access to the best career
          opportunities.
        </p>
        <div className="flex flex-col md:flex-row items-center mt-8 gap-6">
          <div className="relative w-full md:w-1/2">
            <Image
              src={tempImage}
              alt="Placement Highlights"
              width={800}
              height={560}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-xl font-semibold">Career Excellence at KIIT</h3>
            <ul className="mt-4 space-y-2">
              <li>
                ✅ Partnering with leading global companies for career success.
              </li>
              <li>
                ✅ Empowering your future with comprehensive career support.
              </li>
              <li>
                ✅ Proven success in academics and professional achievements.
              </li>
              <li>
                ✅ Efficient and hassle-free admissions and placement process.
              </li>
              <li>
                ✅ Guidance from experienced mentors tailored to your goals.
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium shadow-md">
                📌 Placement Highlights
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium shadow-md">
                🎓 Career School
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
