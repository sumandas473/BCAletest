// src/components/landing/TestimonialSection.jsx
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Franklin Chen",
    role: "Frontend Student",
    message:
      "Attending Bengal Coding Academy was one of the best decisions I’ve ever made. The curriculum was practical and industry-focused.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "bg-[#E6F3F1]",
  },
  {
    name: "James Parker",
    role: "DSA Student",
    message:
      "The instructors explained DSA concepts clearly, and the real coding problems helped me land my first internship.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    color: "bg-[#EAE6F3]",
  },
  {
    name: "Charles Morgan",
    role: "Full Stack Student",
    message:
      "The full-stack projects were amazing! I built a job portal, a blog, and even a course app with guidance from mentors.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    color: "bg-[#FDECF0]",
  },
  {
    name: "James Parker",
    role: "DSA Student",
    message:
      "The instructors explained DSA concepts clearly, and the real coding problems helped me land my first internship.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    color: "bg-[#EAE6F3]",
  },
  {
    name: "Franklin Chen",
    role: "Frontend Student",
    message:
      "Attending Bengal Coding Academy was one of the best decisions I’ve ever made. The curriculum was practical and industry-focused.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "bg-[#E6F3F1]",
  },
];

export default function TestimonialSection() {
  return (
   <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs text-center text-gray-400 mb-2 uppercase tracking-widest">
          Our Testimonial
        </p>
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Thinking About Us
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${t.color} p-6 rounded-xl shadow-sm hover:shadow-md transition h-full flex flex-col justify-between`}
              >
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    “ {t.message} ”
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-purple-600 text-lg" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
