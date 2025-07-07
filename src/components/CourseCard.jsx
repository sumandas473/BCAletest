// src/components/landing/CourseCard.jsx
import { FaStar } from "react-icons/fa";
import { FaRegUser, FaRegPlayCircle } from "react-icons/fa";

export default function CourseCard({
  category,
  image,
  title,
  lessons,
  instructor,
  reviews,
  rating,
  price,
  students,
}) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Image + Category Tag */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><FaRegPlayCircle /> {lessons} Lessons</span>
          <span className="text-gray-400">•</span>
          <span>{instructor}</span>
        </div>

        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
          <span>({reviews} Reviews)</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <p className="text-primary font-bold">{price}</p>
          <p className="flex items-center gap-1 text-xs text-gray-500">
            <FaRegUser /> {students} Students
          </p>
        </div>
      </div>
    </div>
  );
}

