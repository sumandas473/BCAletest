const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
      <div className="w-full lg:w-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-x0P7I5yypmByLFKlA3DwoK3OIsB4Mmds4tN1P7U_ktao8k7UzkUE8WRoJeznsPX5tE&usqp=CAU"
          alt="Contact"
          className="rounded-md shadow-md"
        />
      </div>

      <form className="w-full lg:w-1/2 space-y-4">
        <h3 className="text-xl font-semibold mb-2">Have questions? Contact with us today</h3>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          rows="4"
          placeholder="How can we help you?"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" className="accent-purple-600" />
          I agree to the Privacy Policy.
        </label>
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
