// src/components/landing/CategoryGrid.jsx
import {
  FaBriefcase, FaBullhorn, FaPaintBrush, FaWallet,
  FaHeart, FaShieldAlt, FaCode, FaCamera
} from "react-icons/fa";

const categories = [
  { icon: <FaBriefcase />, label: "Business", count: 80 },
  { icon: <FaBullhorn />, label: "Marketing", count: 60 },
  { icon: <FaPaintBrush />, label: "Design", count: 27 },
  { icon: <FaWallet />, label: "Finance", count: 20 },
  { icon: <FaHeart />, label: "Lifestyle", count: 39 },
  { icon: <FaShieldAlt />, label: "Cyber", count: 45 },
  { icon: <FaCode />, label: "Development", count: 28 },
  { icon: <FaCamera />, label: "Photography", count: 30 },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Course Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white hover:shadow-md transition rounded-full px-5 py-4 flex flex-col items-center text-center cursor-pointer border border-gray-100 hover:border-purple-500"
            >
              <div className="text-purple-600 text-xl mb-2">{cat.icon}</div>
              <div className="text-sm font-semibold text-gray-800">{cat.label}</div>
              <div className="text-xs text-gray-500">{cat.count} Courses</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
