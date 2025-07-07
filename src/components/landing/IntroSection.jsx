// src/components/landing/IntroSection.jsx
import { FaCheckCircle } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.jpg"
            alt="Instructor"
            className="rounded-xl shadow-lg"
          />
          {/* Badge */}
          <div className="absolute top-1 md:top-6 md:left-6 bg-white px-3 md:px-4  md:py-2 rounded-full shadow flex items-center gap-2">
            <span className="text-red-600 text-sm md:text-lg font-bold">9394+</span>
            <div className="text-xs text-gray-500 leading-tight">
              <p className="font-medium text-gray-700">Enrolled</p>
              <p>Learners</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="uppercase text-xs text-gray-500 tracking-wide mb-2">Welcome to Bengal Coding Academy</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Digital Online Academy: Your Path to Creative Excellence
          </h2>
          <p className="text-gray-600 mb-6">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </p>

          <ul className="space-y-3 mb-6 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Our Expert Trainers
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Online Remote Learning
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Easy to Follow Curriculum
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Lifetime Access
            </li>
          </ul>

          <a href="#" class="group inline-flex items-center pl-6 pr-2 py-2 bg-[#5C4DFF] text-white text-base font-medium rounded-full hover:bg-[#4b3ccc] transition">
            Find Courses
            <span class="ml-3 bg-white text-[#5C4DFF] rounded-full w-8 h-8 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
