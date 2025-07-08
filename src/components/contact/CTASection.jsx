const CTASection = () => {
  return (
    <section className="bg-indigo-600 text-white py-12 rounded-lg mt-12 px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3">
          <img
            src="https://img.freepik.com/free-photo/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.jpg"
            alt="Person"
            className="rounded-full w-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="uppercase text-sm mb-1 text-yellow-300">Get started now</p>
          <h3 className="text-2xl font-bold mb-2">
            Affordable Your Online Courses & Learning Opportunities
          </h3>
          <p className="mb-4 text-sm text-white/90">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.
          </p>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500">
            Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
