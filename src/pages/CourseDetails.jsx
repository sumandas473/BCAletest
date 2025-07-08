// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// export default function CourseDetails() {
//   return (
//     <div className="bg-white py-12">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl font-bold text-gray-800">Course Details</h2>
//         <p className="text-sm text-gray-500 mt-1">HOME / COURSE DETAILS</p>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left Section */}
//         <div className="lg:col-span-2 space-y-10">
//           {/* Course Image */}
//           <img
//             src="https://source.unsplash.com/800x450/?business,seo"
//             alt="SEO Course"
//             className="w-full h-72 object-cover rounded-xl"
//           />

//           {/* Course Title & Description */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Starting SEO as your Home Based Business Online Courses
//             </h3>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
//               minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet
//               consectetur adipisicing elit.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit
//               in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim
//               ipsam.
//             </p>
//           </div>

//           {/* What You'll Learn */}
//           <div>
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">
//               What You'll Learn?
//             </h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Tempor incididunt ut labore et dolore magna aliqua enim.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Nunc aliquet bibendum enim facilisis gravida.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Tristique sollicitudin nibh sit amet commodo nulla.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Pulvinar pellentesque habitant morbi tristique.
//               </li>
//             </ul>
//           </div>

//           {/* Secondary Image */}
//           <img
//             src="https://source.unsplash.com/800x450/?ux,design"
//             alt="Photoshop Course"
//             className="w-full h-72 object-cover rounded-xl"
//           />

//           {/* Why Choose This Course */}
//           <div>
//             <h4 className="text-xl font-semibold text-gray-800 mb-4">
//               Why choose you this course?
//             </h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Pellentesque elit eget gravida cum sociis.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Neque volutpat ac tincidunt vitae.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Tempor orci dapibus ultrices in iaculis nunc.
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaCheckCircle className="text-violet-600 mt-1" />
//                 Dignissim enim sit amet venenatis urna.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Sidebar */}
//         <div className="space-y-8">
//           {/* Course Info Box */}
//           <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4">Course Information:</h4>
//             <ul className="space-y-2 text-sm text-gray-700">
//               <li><strong>Price:</strong> <span className="text-violet-600 font-medium">$30</span></li>
//               <li><strong>Instructor:</strong> Laura Martinez</li>
//               <li><strong>Certifications:</strong> Yes</li>
//               <li><strong>Lessons:</strong> 17</li>
//               <li><strong>Duration:</strong> 15 weeks</li>
//               <li><strong>Language:</strong> English</li>
//               <li><strong>Students:</strong> 646</li>
//             </ul>
//           </div>

//           {/* Contact Box */}
//           <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li>📞 24/7 Support: +532 321 33 33</li>
//               <li>📧 Send Message: <a href="mailto:eduna@gmail.com" className="text-violet-600">eduna@gmail.com</a></li>
//               <li>📍 Our Location: 32/Lenin, London</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div className="max-w-7xl mx-auto px-4 mt-20 bg-violet-600 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between py-10 px-8 shadow-lg">
//         <div className="flex-1 mb-6 md:mb-0">
//           <h3 className="text-2xl font-bold mb-2">Affordable Your Online Courses & Learning Opportunities</h3>
//           <p className="text-sm opacity-90">
//             Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
//           </p>
//         </div>
//         <div>
//           <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
//             Start Learning Today
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function CourseDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const courses = useSelector((state) => state.course.courses);
//   const course = courses.find((c) => c.id.toString() === id);

//   if (!course) {
//     return <div className="text-center text-gray-500 py-20">Course not found {id}.</div>;
//   }

//   const {
//     image,
//     title,
//     category,
//     instructor,
//     lessons,
//     reviews,
//     rating,
//     price,
//     students,
//     certification,
//     duration,
//     language,
//   } = course;

//   return (
//     <div className="py-12">
//       <div className="max-w-4xl mx-auto px-4">
       

//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-6 text-sm text-violet-600 hover:underline flex items-center"
//         >
//           ← Back
//         </button>

//         <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl" />
//         <h2 className="text-3xl font-bold mt-6">{title}</h2>
//         <p className="text-gray-600 mt-2">{category} • Instructor: {instructor}</p>
//         <p className="text-sm text-gray-500 mt-1">
//           {lessons} Lessons • {students} Students • {language}
//         </p>
//         <p className="text-yellow-500 mt-2">⭐ {rating} ({reviews} Reviews)</p>
//         <p className="text-lg text-violet-600 font-bold mt-4">{price}</p>
//         <p className="text-sm mt-2">Certification: {certification} • Duration: {duration}</p>
//       </div>
//     </div>
//   );
// }





import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice"; // Adjust path if needed

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.course.courses);
  const cartItems = useSelector((state) => state.cart.items);
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="text-center text-gray-500 py-20">
        Course not found with ID: {id}.
      </div>
    );
  }

  const {
    image,
    title,
    category,
    instructor,
    lessons,
    reviews,
    rating,
    price,
    students,
    certification,
    duration,
    language,
  } = course;

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.some((item) => item.id === course.id);
    if (!alreadyInCart) {
      dispatch(addToCart({ ...course, quantity: 1 }));
    }
    navigate("/cart");
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-violet-600 hover:underline flex items-center"
        >
          ← Back
        </button>

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h2 className="text-3xl font-bold mt-6">{title}</h2>
        <p className="text-gray-600 mt-2">
          {category} • Instructor: {instructor}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {lessons} Lessons • {students} Students • {language || "English"}
        </p>
        <p className="text-yellow-500 mt-2">
          ⭐ {rating} ({reviews} Reviews)
        </p>
        <p className="text-lg text-violet-600 font-bold mt-4">{price}</p>
        <p className="text-sm mt-2">
          Certification: {certification || "Yes"} • Duration:{" "}
          {duration || "Self-paced"}
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <button
            onClick={handleAddToCart}
            className="px-5 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
