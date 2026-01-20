import { useState } from "react";
import UniversityCard from "../components/UniversityCard";
import SearchBar from "../components/SearchBar";

export default function Universities() {
  // Dummy data
  const [universities] = useState([
    { id: 1, name: "University of Peshawar", city: "Peshawar" },
    { id: 2, name: "Abdul Wali Khan University", city: "Mardan" },
    { id: 3, name: "Gomal University", city: "D.I Khan" },
    { id: 4, name: "Khyber Medical University", city: "Peshawar" },
    { id: 5, name: "Bacha Khan University", city: "Charsadda" },
  ]);

  const [search, setSearch] = useState("");

  // Filter universities based on search
  const filteredUniversities = universities.filter((uni) =>
    uni.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">
        Universities in KPK
      </h1>

      {/* Reusable SearchBar */}
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search universities..."
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredUniversities.map((uni) => (
          <UniversityCard
            key={uni.id}
            id={uni.id}
            name={uni.name}
            city={uni.city}
          />
        ))}
      </div>
    </div>
  );
}
