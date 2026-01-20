export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-slate-900">
        About UniGuide
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
        UniGuide is a student-centric platform that simplifies the process of 
        exploring universities in Khyber Pakhtunkhwa. It provides up-to-date 
        information about academic programs, fee structures, and admission 
        requirements, helping students make informed and confident decisions 
        for their higher education.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p className="text-gray-600">
            To empower students with accurate and comprehensive university information in one place.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p className="text-gray-600">
            To become the most reliable guide for higher education decisions in KPK.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Goal</h3>
          <p className="text-gray-600">
            To streamline university exploration and comparison, saving students time and effort.
          </p>
        </div>
      </div>
    </div>
  );
}
