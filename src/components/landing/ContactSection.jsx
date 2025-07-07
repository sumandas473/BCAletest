// src/components/landing/ContactSection.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative bg-gray-100 py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://dynamic.brandcrowd.com/template/preview/design/d04bc9ff-4081-4459-ae4e-88451a4c9320?v=4&designTemplateVersion=1&size=design-preview-standalone-2x"
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info Box */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact with Us</h3>
          <div className="space-y-6 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-purple-600 mt-1" />
              <div>
                <p className="font-medium">24/7 Support</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-purple-600 mt-1" />
              <div>
                <p className="font-medium">Send Message</p>
                <p>bengalcodingacademy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-purple-600 mt-1" />
              <div>
                <p className="font-medium">Our Location</p>
                <p>Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-xl shadow-md">
          <p className="text-sm uppercase text-gray-500 mb-1">Get In Touch</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Have Any Questions About Bengal Coding Academy?
          </h2>

          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="input-style"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="input-style"
              />
            </div>
            <input
              type="text"
              placeholder="Your website (optional)"
              className="input-style"
            />
            <input
              type="email"
              placeholder="Your email"
              className="input-style"
            />
            <textarea
              placeholder="How can we help you?"
              className="input-style h-28"
            ></textarea>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy" className="text-sm text-gray-600">
                I agree to the Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition flex items-center gap-2"
            >
              Send Your Message <span className="text-sm">➜</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
