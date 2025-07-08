import React from 'react';
import { useSelector } from "react-redux";
import CourseCard from '../components/CourseCard'; // Adjust path as needed



export default function CoursesPage() {
   const courses = useSelector((state) => state.course.courses);
  return (
    <div className="">
      {/* Page Header */}
      <div className="text-center mb-12 bg-amber-200 py-12">
        <h1 className="text-4xl font-bold mt-2">Our Courses </h1>
          <h1 className="text-2xl font-mono mt-2">Bengal Coding Academy </h1>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          Showing 1–6 of {courses.length} Results
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search your courses..."
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-violet-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mb-16">
        <button className="w-10 h-10  bg-violet-600 text-white font-semibold hover:bg-violet-700 transition">
          01
        </button>
        <button className="w-10 h-10  border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          02
        </button>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="max-w-7xl mx-auto  md:px-6 bg-violet-600 text-white  flex flex-col md:flex-row items-center justify-between py-10 px-8 shadow-lg">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Affordable Your Online Courses & Learning Opportunities</h3>
          <p className="text-sm opacity-90">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
        </div>
        <div>
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3  hover:bg-yellow-300 transition">
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );
}
