import React from "react";
import online1 from "../ASSETS/online1.jpg";
import kccCertification1 from "../ASSETS/kcc-Certification1.jpg";
import boying1 from "../ASSETS/boying-1.jpg";
import Image from "next/image";

export default function KiitProgram() {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-2">
          <Image src={online1} alt="Online" />
        </div>
        <div className="p-2">
          <Image src={kccCertification1} alt="KCC Certification" />
        </div>
        <div className="p-2">
          <Image src={boying1} alt="Boying" />
        </div>
        <div className="p-2">
          <Image src={boying1} alt="Boying" />
        </div>
      </div>
    </div>
  );
}
