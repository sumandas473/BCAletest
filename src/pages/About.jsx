import React from 'react';
import CategoryGrid from '../components/landing/CategoryGrid';


export default function About() {
  return (

 
    
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-[#fffebb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <h1 className="text-4xl font-bold mt-2">About Us </h1>
          <h1 className="text-2xl font-mono mt-2">Bengal Coding Academy </h1>
        </div>
      </section>

      {/* Who We Are */}
    <section className="">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
    {/* Left Side */}
    <div>
      <h2 className="text-4xl md:text-5xl font-semibold mb-4">
        Transform Your Best Practice With Our Online Course
      </h2>
      <p className="text-gray-600 mb-4">
        Descriptive about successful application and student work in badges can give students a sense of
        accomplishment and self-esteem.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="text-xl">✅ Face-to-face Teaching</li>
        <li className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus in nihil earum rem deleniti quia eaque repellendus sint id odio?
        </li>
        <li className="text-xl">✅ 24/7 Support Available</li>
        <li className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus in nihil earum rem deleniti quia eaque repellendus sint id odio?
        </li>
      </ul>
    </div>

    {/* Right Side */}
    <div className="relative flex flex-col items-center gap-4">
      <img
        src="https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg"
        alt="Instructor"
        className="rounded-lg shadow w-full"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-x0P7I5yypmByLFKlA3DwoK3OIsB4Mmds4tN1P7U_ktao8k7UzkUE8WRoJeznsPX5tE&usqp=CAU"
        alt="Student"
        className="rounded-lg shadow w-32 sm:w-40 md:w-48 lg:w-56 absolute -bottom-6 right-4 sm:right-10"
      />
    </div>
  </div>
</section>


      {/* Top Categories */}

      <CategoryGrid />


      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Top Categories You Want to Learn</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
            {[
              "Business", "Marketing", "Design", "Finance",
              "Lifestyle", "Cyber", "Development", "Photography"
            ].map((item) => (
              <div key={item} className="bg-white border rounded-full px-5 py-2 shadow text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Collaboration */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <iframe
  className="rounded-xl mx-auto mb-6 md:w-1/2 shadow-lg"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/giWywEPWTus?autoplay=1&mute=1&controls=1&loop=1&playlist=giWywEPWTus"
  title="YouTube video player"
  frameBorder="0"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
></iframe>

          <p className="text-gray-600">
            Get in touch for <strong>More</strong> information about our courses and how we can help you achieve your learning goals.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mt-6 text-gray-500 text-sm">
            {["Education", "Online", "Digital", "Smart", "Creative"].map((brand) => (
              <div key={brand}>{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#5427d0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Right Learning Path For Your Future</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Choose your desired course & start learning with the best instructors.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Academy Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-5xl font-semibold mb-4">
              Digital Online Academy: Your Path to Creative Excellence
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg mt-8">
              <li>Get Expert Instructor</li>
              <li>Get Certificate</li>
              <li>Quality Learning Material</li>
              <li>Lifetime Access</li>
            </ul>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEIXSApTr25w5QaJYwvaYGIVYDzaQINMdHSWJEf7nT_SWAz-wSOZFYvuWPX6q5Ymk7k0&usqp=CAU"
            alt="Academy"
            className="rounded-xl shadow w-full"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f8fd] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Student Thinking About Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-left">
                <p className="text-gray-600 mb-4 text-sm">
                  "Attending Bengal Coding Academy school of business was one of the best professional investments I’ve made..."
                </p>
                <div className="font-semibold text-sm text-gray-800">— Student Name</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div className="">
            <h2 className="text-3xl font-semibold mb-6">Most Popular Questions About Our Online Courses</h2>
            {[
              "How can I start with your online class?",
              "How can I register to your website to learn?",
              "Can I join the class via my mobile?",
              "How can I contact a teacher for a course?"
            ].map((q, idx) => (
              <details key={idx} className="bg-white  rounded p-4 cursor-pointer text-lg">
                <summary className="font-medium">{q}</summary>
                <p className="text-sm text-gray-600 mt-3">Here is the detailed answer for: {q}</p>
              </details>
            ))}
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-x0P7I5yypmByLFKlA3DwoK3OIsB4Mmds4tN1P7U_ktao8k7UzkUE8WRoJeznsPX5tE&usqp=CAU"
            alt="FAQ"
            className="rounded-xl mx-auto mb-6 md:w-full shadow-lg mt-2"
          />
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Our New Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden text-left">
                <img
                  src={`https://source.unsplash.com/400x250/?education,student,${i}`}
                  alt="Blog"
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1">Blog Title {i}</h3>
                  <p className="text-xs text-gray-500">Published on July {i}, 2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="bg-[#5427d0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Affordable Your Online Courses & Learning Opportunities
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Explore best online classes and boost your career with expert-led content.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
            Start Learning Today
          </button>
        </div>
      </section>
    </div>
    
  );
}
