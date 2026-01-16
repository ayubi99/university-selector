import React from "react";

const Hero = ({ onOpenAuth }) => {
  return (
    <section className="py-16 px-4 bg-blue-300">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
            Find Your Perfect University in
            <span className="text-primary"> Khyber Pakhtunkhwa</span>
          </h1>

          <p className="text-xl text-gray mb-10 max-w-3xl mx-auto">
            Explore 35+ universities across KPK. Compare programs, admission
            criteria, and campus facilities to make the right choice for your
            future.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex bg-white rounded-xl shadow-lg p-2 border">
              <div className="flex-1 flex items-center px-4 py-3">
                <span className="text-gray mr-3">🔍</span>
                <input
                  type="text"
                  placeholder="Search by university name, program, or city..."
                  className="flex-1 outline-none text-lg w-full placeholder-gray-400"
                />
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition">
                Search
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onOpenAuth("signup")}
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
            >
              <span className="font-bold mr-2">1.</span> Get Started Free
              <span className="ml-3">→</span>
            </button>

            <button
              onClick={() => onOpenAuth("login")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/5 transition"
            >
              Log in to Continue
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <p className="text-gray">Universities</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <p className="text-gray">Programs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-accent mb-2">25</div>
              <p className="text-gray">Cities</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-dark mb-2">300K+</div>
              <p className="text-gray">Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
