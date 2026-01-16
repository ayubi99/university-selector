import React from "react";

const UniversityList = () => {
  const universities = [
    {
      name: "University of Peshawar",
      location: "Peshawar",
      type: "Public • Established 1950",
      programs: "150+ Programs",
      rating: "4.8",
      category: "General University",
      color: "border-l-4 border-teal-500",
    },
    {
      name: "University of Engineering & Technology",
      location: "Peshawar",
      type: "Public • Established 1980",
      programs: "80+ Engineering Programs",
      rating: "4.9",
      category: "Engineering & Technology",
      color: "border-l-4 border-blue-500",
    },
    {
      name: "Islamia College University",
      location: "Peshawar",
      type: "Public • Established 1913",
      programs: "120+ Programs",
      rating: "4.7",
      category: "Liberal Arts & Sciences",
      color: "border-l-4 border-amber-500",
    },
    {
      name: "University of Swat",
      location: "Swat",
      type: "Public • Established 2010",
      programs: "60+ Programs",
      rating: "4.5",
      category: "Growing University",
      color: "border-l-4 border-purple-500",
    },
    {
      name: "Ghulam Ishaq Khan Institute",
      location: "Topi, Swabi",
      type: "Private • Established 1993",
      programs: "Engineering & Sciences",
      rating: "4.9",
      category: "Elite Engineering",
      color: "border-l-4 border-pink-500",
    },
    {
      name: "University of Malakand",
      location: "Chakdara",
      type: "Public • Established 2001",
      programs: "70+ Programs",
      rating: "4.6",
      category: "Scenic Campus",
      color: "border-l-4 border-green-500",
    },
  ];

  return (
    <section id="universities" className="py-20 px-4 bg-blue-300">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Top Universities in KPK
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Browse leading universities across Khyber Pakhtunkhwa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${uni.color}`}
            >
              <div className="p-6">
                {/* University Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">
                      {uni.name}
                    </h3>
                    <div className="flex items-center text-gray text-sm">
                      <span className="mr-2">📍</span>
                      <span>{uni.location}</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {uni.rating} ★
                  </div>
                </div>

                {/* University Details */}
                <div className="mb-6">
                  <div className="text-gray text-sm mb-2">{uni.type}</div>
                  <div className="font-medium text-dark mb-2">
                    {uni.programs}
                  </div>
                  <div className="text-sm text-gray bg-gray-50 px-3 py-1 rounded inline-block">
                    {uni.category}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition">
            View All 35+ Universities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityList;
