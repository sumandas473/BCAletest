// // src/components/landing/HeroSection.jsx
// import { Link } from "react-router-dom";
// import React from "react";
// import heroimg from "../../assets/hero.png"; // Adjust the path as necessary
// import bannerimg from "../../assets/banner.png"; // Adjust the path as necessary

// export default function HeroSection() {
//   return (
//     // <section className="bg-gradient-to-r from-orange-50 to-white py-20">
//     //   <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
//     //     {/* Left Side */}
//     //     <div>
//     //       <p className="text-sm text-primary font-semibold mb-2">#1 Online Education</p>
//     //       <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//     //         Best <span className="text-primary">Online</span><br />
//     //         Platform to Learn<br />
//     //         Everything
//     //       </h1>
//     //       <p className="text-gray-600 mb-6">
//     //         Explore 5,000+ courses across all subjects and levels with top-rated instructors.
//     //       </p>
//     //       <div className="flex gap-4">
//     //         <Link to="/courses" className="btn">Find Courses</Link>
//     //         <Link to="/contact" className="btn bg-gray-800 hover:bg-gray-900">Get In Touch</Link>
//     //       </div>
//     //     </div>

//     //     {/* Right Side */}
//     //     <div className="relative  h-full">
//     //       <img
//     //         src={heroimg}
//     //         alt="Hero Girl"
//     //         className="w-full h-full object-cover max-w-sm mx-auto"
//     //       />
//     //     </div>
//     //   </div>
//     // </section>

//     // <section className="w-full">
//     //   <img src={bannerimg} alt="" className="w-full object-cover" />

//     // </section>


//   );
// }



import React from 'react';
import { CgMouse } from "react-icons/cg";
import { Link } from 'react-router-dom';




// https://cdn.dribbble.com/userupload/17778216/file/original-ea8be7b1c17c7b04ce83d5725e89a282.mp4
const HeroSection = () => {

  const velocity = 100;
  return (
    <section className="relative bg-gradient-to-l from-[#06000c] via-[#10001f] to-[#06000c] min-h-screen w-full  flex flex-col justify-center items-center overflow-hidden pt-2 pb-12">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        src="https://cdn.dribbble.com/userupload/14789731/file/original-390656e330f2a9a00c15a58bfcca7c35.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Container */}


      <div className="max-w-5xl w-full text-center mt-36 lg:mt-52">
        <div className="inline-flex items-center  rounded-full px-4 py-2 mb-6 text-xs sm:text-sm font-semibold space-x-2 select-none mx-auto max-w-max border ">
          <span className="text-white text-[10px] sm:text-xs leading-none">•</span>
          <span className="text-white">বাংলায় শিখব, সারা বিশ্বে নাম করব</span>
          <span className="text-white text-[10px] sm:text-xs leading-none">•</span>

        </div>
        <h1 className="text-amber-50 font-normal text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] leading-[1.1] sm:leading-[1.05] max-w-[700px] mx-auto" >
          BENGAL
          <br />
          CODING ACADEMY
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 mb-8 leading-relaxed px-2">
          Bengal Coding Academy is a premier online platform offering structured programming courses designed to equip learners with in-demand technical skills. We specialize in delivering high-quality, industry-relevant training to help individuals advance their careers in software development and technology.
        </p>
        <div className="flex justify-center space-x-4 mb-14">
          <button className="text-white text-sm sm:text-base font-normal rounded-lg px-6 py-2 border border-white border-opacity-40 hover:border-opacity-100 transition relative overflow-hidden hover:scale-105 duration-150" style={{ boxShadow: '0 0 8px 2px rgba(255,255,255,0.6)' }}>
            Get Started Now
          </button>
          <Link to="/courses">
          <button className="text-white text-sm sm:text-base font-normal rounded-lg px-6 py-2 border border-white border-opacity-40 hover:border-opacity-100 transition relative overflow-hidden hover:scale-105 duration-150" style={{ boxShadow: '0 0 8px 2px rgba(255,255,255,0.6)' }}>
            See Courses
          </button>
          </Link>
        </div>
        <div className="flex items-center justify-center text-gray-200 text-xs sm:text-sm space-x-4 max-w-[520px] mx-auto mb-16 select-none px-2">
          <span className='text-gray-200'>Scroll down</span>
          <div className="flex-grow border-t border-gray-700"></div>
          <div className="flex items-center justify-center text-gray-400 text-[18px] sm:text-lg mx-2">
            <CgMouse />
          </div>
          <div className="flex-grow border-t border-gray-700 ml-2"></div>
          <span className='text-gray-200'>to see Contents</span>
        </div>

        
      </div>

    </section>




  );
};

export default HeroSection;