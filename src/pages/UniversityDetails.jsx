import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProgramTable from "../components/ProgramTable";

// Dummy data for now
const dummyPrograms = {
  1: [
    { name: "BS Computer Science", fee: "PKR 60,000/year", deadline: "30 Sep 2026" },
    { name: "BS Physics", fee: "PKR 50,000/year", deadline: "30 Sep 2026" },
  ],
  2: [
    { name: "BS Mathematics", fee: "PKR 55,000/year", deadline: "25 Sep 2026" },
    { name: "BS Chemistry", fee: "PKR 52,000/year", deadline: "25 Sep 2026" },
  ],
  3: [
    { name: "MBBS", fee: "PKR 150,000/year", deadline: "10 Sep 2026" },
    { name: "BDS", fee: "PKR 140,000/year", deadline: "10 Sep 2026" },
  ],
};

export default function UniversityDetails() {
  const { id } = useParams(); // get id from URL
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    setPrograms(dummyPrograms[id] || []);
  }, [id]);

  // Map id to university name
  const universityNames = {
    1: "University of Peshawar",
    2: "Abdul Wali Khan University",
    3: "Gomal University",
  };
  const uniName = universityNames[id] || "University Details";

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4 text-slate-900">{uniName}</h1>
      <p className="text-gray-600 mb-10">
        Explore available programs, fee structure, and admission deadlines below.
      </p>

      {/* Reusable ProgramTable */}
      <ProgramTable programs={programs} />
    </div>
  );
}
