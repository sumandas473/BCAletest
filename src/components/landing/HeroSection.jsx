// src/components/landing/HeroSection.jsx
import { Link } from "react-router-dom";
import React from "react";
import heroimg from "../../assets/hero.png"; // Adjust the path as necessary
import bannerimg from "../../assets/banner.png"; // Adjust the path as necessary

export default function HeroSection() {
  return (
    // <section className="bg-gradient-to-r from-orange-50 to-white py-20">
    //   <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    //     {/* Left Side */}
    //     <div>
    //       <p className="text-sm text-primary font-semibold mb-2">#1 Online Education</p>
    //       <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
    //         Best <span className="text-primary">Online</span><br />
    //         Platform to Learn<br />
    //         Everything
    //       </h1>
    //       <p className="text-gray-600 mb-6">
    //         Explore 5,000+ courses across all subjects and levels with top-rated instructors.
    //       </p>
    //       <div className="flex gap-4">
    //         <Link to="/courses" className="btn">Find Courses</Link>
    //         <Link to="/contact" className="btn bg-gray-800 hover:bg-gray-900">Get In Touch</Link>
    //       </div>
    //     </div>

    //     {/* Right Side */}
    //     <div className="relative  h-full">
    //       <img
    //         src={heroimg}
    //         alt="Hero Girl"
    //         className="w-full h-full object-cover max-w-sm mx-auto"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="w-full">
      <img src={bannerimg} alt="" className="w-full object-cover" />

    </section>


  );
}
