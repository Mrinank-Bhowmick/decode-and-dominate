import HeroSection from "@/components/hero-section";
import RankingSection from "@/components/ranking";
import Image from "next/image";
import logo from "../ASSETS/KIIT-Logo-h60.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Footer from "@/components/footer";
import ResearchSpotlight from "@/components/research";
import KiitProgram from "@/components/program";

export default function Home() {
  return (
    <main>
      <nav className="bg-green-600 text-white px-6 py-2 flex justify-between items-center">
        {/* Left Side - Navigation Links */}
        <ul className="flex space-x-4 text-sm font-medium">
          {[
            "SAP Portal",
            "Library",
            "Notices",
            "Alumni",
            "Staff",
            "Sports",
            "Examination",
            "Placement",
            "Careers",
            "Founder",
            "A – Z Index",
            "Brochure",
            "KIITEE 2025",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-gray-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side - Fee Payment Button & Social Icons */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded">
            Fee Payment
          </button>

          {/* Social Media Icons */}
          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image
          src={logo}
          alt="LOGO"
          width={60}
          height={60}
          //className="h-10"
        />
        <div className="flex space-x-4 text-black">
          {[
            { label: "ABOUT KIIT", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "ACADEMICS", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "RESEARCH", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "NEWS & EVENTS", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "EXPLORE KIIT", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "VIRTUAL TOUR", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "CONTACT US", submenu: ["Submenu 1", "Submenu 2"] },
            { label: "ADMISSION 2025", submenu: ["Submenu 1", "Submenu 2"] },
          ].map((item, index) => (
            <div key={index} className="relative group">
              <button className="px-4 py-2">{item.label}</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg z-50">
                {item.submenu.map((submenuItem, subIndex) => (
                  <a key={subIndex} href="#" className="block px-4 py-2">
                    {submenuItem}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <HeroSection />
      <KiitProgram />
      <RankingSection />
      <ResearchSpotlight />

      <Footer />
    </main>
  );
}
