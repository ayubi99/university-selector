import React from "react";
import Logo from "./Logo";

const Footer = ({ onOpenAuth }) => {
  const footerLinks = {
    Universities: [
      "Public Universities",
      "Private Universities",
      "Engineering",
      "Medical",
      "Business",
    ],
    Programs: [
      "Undergraduate",
      "Graduate",
      "PhD Programs",
      "Diplomas",
      "Certificates",
    ],
    Resources: [
      "Admission Calendar",
      "Merit Lists",
      "Past Papers",
      "Hostel Guide",
      "Transport",
    ],
    Support: [
      "Help Center",
      "Contact Us",
      "FAQs",
      "Privacy Policy",
      "Terms of Service",
    ],
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              UniSelector helps students find and compare universities across
              Khyber Pakhtunkhwa. Our platform provides accurate information,
              admission guidance, and scholarship opportunities.
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📧</span>
                <span>support@uniselector.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                <span>+92 123 456 7890</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to from-secondary to-blue-600 rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Ready to Find Your University?
              </h3>
              <p className="text-blue-100">
                Join thousands of students using UniSelector
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenAuth("signup")}
                className="bg-white text-dark font-bold px-8 py-3 rounded-lg hover:bg-gray-100 shadow"
              >
                <span className="font-bold">1.</span> Start Free
              </button>
              <button
                onClick={() => onOpenAuth("login")}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10"
              >
                Log in
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} UniSelector. All rights reserved.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white mx-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white mx-4">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white mx-4">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white mx-4">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
