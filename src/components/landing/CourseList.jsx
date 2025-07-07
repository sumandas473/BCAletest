// src/components/landing/CourseList.jsx
import CourseCard from "../CourseCard";

const courses = [
  {
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
  {
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
  {
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

  {
    category: "Full Stack",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s",
    title: "MERN Stack Projects: Build Real Web Apps",
    lessons: 65,
    instructor: "Maxwell Ford",
    reviews: 102,
    rating: 5,
    price: "$459.00",
    students: 920,
  },
  {
    category: "HTML/CSS/JS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqdQM0AXXIG6aiXkwzEW5RKmKY-ocwCpfTteIBpV9VdtYRqvHhoN6cVKkkucZmBJteNo&usqp=CAU",
    title: "Frontend Fundamentals: HTML, CSS, JavaScript",
    lessons: 30,
    instructor: "Dominic Chase",
    reviews: 60,
    rating: 4,
    price: "$199.00",
    students: 500,
  },
   {
    category: "DevOps",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjzAkmEIfapYIjNvD-qNLXqEIuAZBV9gAVFqiW8wIO6axlISIYmimynh0pPE3FdWci8o&usqp=CAU",
    title: "MERN Stack Projects: Build Real Web Apps",
    lessons: 65,
    instructor: "Maxwell Ford",
    reviews: 102,
    rating: 5,
    price: "$459.00",
    students: 920,
  },
];


export default function CourseList() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="uppercase text-xs text-center text-gray-500 mb-4">Online Courses</p>
        <h2 className="text-3xl font-bold text-center mb-10">Get Your Course With Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
