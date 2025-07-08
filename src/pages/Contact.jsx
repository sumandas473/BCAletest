import React from "react";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import CTASection from "../components/contact/CTASection";

function Contact() {
  return (
    <main className="pb-20 bg-white">
       {/* Page Heading */}
        <div className="text-center mb-10 py-12 bg-indigo-200 w-full">
          <p className="uppercase text-xs text-gray-500 mb-2">Contact With Us</p>
          <h1 className="text-3xl font-bold">Get in Touch</h1>
        </div>
      <div className="max-w-7xl mx-auto px-4">
       

        {/* Contact Info Cards */}
        <ContactCards />

        {/* Contact Form & Image */}
        <ContactForm />

        {/* Call to Action */}
        <CTASection />
      </div>
    </main>
  );
}

export default Contact;
