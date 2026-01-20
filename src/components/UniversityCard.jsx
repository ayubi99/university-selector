import { useNavigate } from "react-router-dom";

export default function UniversityCard({ id, name, city }) {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate(`/university/${id}`)}
    >
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-500">{city}</p>
    </div>
  );
}
