import { FaStar } from "react-icons/fa";
import { FaRegUser, FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CourseCard({
  id,
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
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100">
      {/* Image + Category */}
      <div className="relative">
        <Link to={`/courses/${id}`}>
          <img
            src={image}
            alt={title || "Course image"}
            className="w-full h-52 object-cover"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {category}
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Top Info */}
        <div className="flex items-center flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaRegPlayCircle className="text-violet-600" /> {lessons} Lessons
          </span>
          <span className="text-gray-400">•</span>
          <span className="truncate">{instructor}</span>
        </div>

        {/* Title */}
        <Link to={`/courses/${id}`}>
          <h3 className="text-sm font-semibold text-gray-800 hover:text-violet-600 transition line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center text-yellow-400">
            {[...Array(Math.min(5, Math.round(rating)))].map((_, i) => (
              <FaStar key={i} className="text-xs" />
            ))}
          </div>
          <span className="ml-1">({reviews} Reviews)</span>
        </div>

        {/* Bottom Info */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-violet-600 font-bold text-sm">{price}</p>
          <p className="flex items-center gap-1 text-xs text-gray-500">
            <FaRegUser className="text-base" /> {students} Students
          </p>
        </div>
      </div>
    </div>
  );
}

