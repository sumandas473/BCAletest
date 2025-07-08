// src/components/landing/CourseList.jsx
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard";


const courses = [
  {   id: 2,
    category: "DSA",
    image: "https://www.oxfordinstitute.in/img/dsa-course.jpg",
    title: "Mastering DSA with C++ for Coding Interviews",
    lessons: 45,
    instructor: "Harrison Stone",
    reviews: 120,
    rating: 5,
    price: "$349.00",
    students: 1100,
  },
  { id: 3,
    category: "Frontend",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240703165023/Frontend-Development-(1).webp",
    title: "React JS Complete Guide (Hooks, Redux, Projects)",
    lessons: 60,
    instructor: "Alexander Wells",
    reviews: 95,
    rating: 5,
    price: "$399.00",
    students: 850,
  },
  { id: 4,
    category: "Backend",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
    title: "Node.js & Express: Backend Development Bootcamp",
    lessons: 52,
    instructor: "John Smith",
    reviews: 78,
    rating: 4,
    price: "$299.00",
    students: 740,
  },

  
];


export default function CourseList() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <p className="uppercase text-xs text-center text-gray-500 mb-4">Online Courses</p>
    
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
      <h2 className="text-3xl font-bold text-center sm:text-left">Get Your Course With Us</h2>
      <Link
        to="/courses"
        className="mt-4 sm:mt-0 text-sm bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-max"
      >
        See All Courses
      </Link>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link to={`/courses/${course.id}`} key={course.id} className="block">
          <CourseCard {...course} />
        </Link>
      ))}
    </div>
  </div>
</section>

  );
}
