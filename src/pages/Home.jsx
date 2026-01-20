export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Your Guide to Universities in KPK
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
           UniGuide enables students to explore universities and compare programs, fees, and admission details through a single, centralized platform.
          </p>

          {/* Search */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search university or program..."
              className="w-full max-w-xl px-5 py-4 bg-slate-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
              and admission deadlines.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              ⏱ Updated Information
            </h3>
            <p className="text-gray-600">
              Get up-to-date admission and program details collected
              automatically.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">
              🔍 Smart Search
            </h3>
            <p className="text-gray-600">
              Easily search universities and programs to find the best match
              for your future.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR UNIVERSITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Universities in KPK
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {["University of Peshawar", "AWKUM", "Gomal University"].map(
              (uni, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg">{uni}</h3>
                  <p className="text-gray-500">View programs & details</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
