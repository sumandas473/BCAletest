// src/components/landing/FeatureHighlights.jsx
import { FaChalkboardTeacher, FaUserTie, FaAward } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Educator Support",
    desc: "Exceptional educator support to help students succeed.",
    color: "text-yellow-400"
  },
  {
    icon: <FaUserTie />,
    title: "Top Instructor",
    desc: "Learn from the top-rated instructors worldwide.",
    color: "text-green-400"
  },
  {
    icon: <FaAward />,
    title: "Award Winning",
    desc: "Our platform is globally recognized for its excellence.",
    color: "text-red-400"
  }
];

export default function FeatureHighlights() {
  return (
    <section className="bg-[#071c1f] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {features.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className={`text-4xl ${item.color} inline-block`}>{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
