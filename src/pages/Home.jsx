import { Link } from "react-router-dom";
import Universities from "./Universities";
import About from "./About";
import Contact from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
   const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    
     
<>
<section id="home">
   <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-15 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            A Smart Platform for Exploring Universities in KPK
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            UniSelection helps students explore universities and compare
            programs, fees, and admission details — all in one centralized
            platform.
          </p>

          {/* Search + Get Started */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search university or program..."
              className="w-full sm:w-96 px-4 py-3 bg-slate-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Link
              to="/universities"
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              🎓 University Comparison
            </h3>
            <p className="text-gray-600">
              Compare universities and programs based on fees, eligibility,
              and admission criteria.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              ⏱ Updated Information
            </h3>
            <p className="text-gray-600">
              Access regularly updated admission schedules and academic
              details.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              🔍 Smart Search
            </h3>
            <p className="text-gray-600">
              Quickly find universities and programs that match your academic
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR UNIVERSITIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Universities in Khyber Pakhtunkhwa
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
            {[
              "University of Peshawar",
              "UET Peshawar",
              "Agriculture University Peshawar",
            ].map((uni, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{uni}</h3>
                <p className="text-gray-500 text-sm">
                  View programs, fees & admission details
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </div>
</section>
<Universities/>
<About/>
<Contact/>
</>
    
    
    
   
  );
}
