import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Other Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            {[
              "Verification of certificates",
              "About us",
              "FAQs",
              "Convocations",
              "MOU’s and Collaborations",
              "Centres of Excellence",
              "Executive Committee Society",
              "Placement",
              "International Affairs",
              "Library",
              "Testimonials",
              "Mandatory Disclosures",
              "KIIT Alumni Information",
            ].map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            {[
              "CIQA",
              "KIIT Online Programs",
              "KIIT Online Admission & Public Notice",
              "SAP Portal",
              "Grievance Portal (SGRC)",
              "KIIT Review",
              "KIIT Research Journal",
              "Student Counselling Cell",
              "Student Activity Centre",
              "Controller of Examinations",
              "Recognised Centres",
              "Sustainability",
              "NAAC",
            ].map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">KIIT Group Websites</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            {[
              "Founder",
              "KISS Foundation",
              "Art of Giving",
              "KIMS Hospital",
              "Technology Business Incubator",
              "KIIT-ITI",
              "KIIT Polytechnic",
              "KIIT International School",
              "Kalarabanka Smart Village",
              "Kanya Kiran",
              "Kalinga Bharti FM",
            ].map((link, index) => (
              <li key={index} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact us</h3>
          <p className="mt-4 text-gray-400">
            Kalinga Institute of Industrial Technology (KIIT)
            <br /> Patia, Bhubaneswar, Odisha, India 751024
          </p>
          <p className="mt-2 text-gray-400">📧 kiit@kiit.ac.in</p>
          <p className="mt-2 text-gray-400">
            📞 Helpline: 0674 2725113, 0674 2741389
          </p>
          <p className="mt-2 text-gray-400">🎓 Admission: 8080 735 735</p>
          <p className="mt-2 text-gray-400">🖥 Online Programs: 8856080200</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
