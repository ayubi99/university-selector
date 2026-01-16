import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "University Comparison",
      description:
        "Compare multiple universities side-by-side based on programs, fees, and facilities.",
    },
    {
      icon: "📋",
      title: "Admission Guidance",
      description:
        "Step-by-step guidance for application process and requirements.",
    },
    {
      icon: "💰",
      title: "Scholarship Finder",
      description:
        "Discover scholarships, financial aid, and HEC funding opportunities.",
    },
    {
      icon: "📊",
      title: "Program Match",
      description:
        "Find the perfect program based on your interests and career goals.",
    },
    {
      icon: "🏛️",
      title: "Campus Information",
      description:
        "Virtual tours, campus facilities, and student life details.",
    },
    {
      icon: "📈",
      title: "Career Outcomes",
      description: "Graduate employment rates and alumni success stories.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-blue-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            How UniSelector Helps You
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Everything you need to make an informed decision about higher
            education in KPK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-20 bg-gradient-to from-primary to-primary-dark rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-primary-100">Student Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-primary-100">Admission Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Free</div>
              <p className="text-primary-100">Forever for Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
