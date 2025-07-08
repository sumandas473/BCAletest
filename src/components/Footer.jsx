export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 ">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div>
          <h2 className="text-l font-bold text-primary mb-3">Bengal Coding Academy</h2>
          <p className="text-sm mb-3">Online course platform for all learners. Designed for success.</p>
          <div className="flex gap-3 text-xl">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instructors</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">Bengalcodingacademy.com</p>
          <p className="text-sm">+91 99999 99999</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded border"
            />
            <button className="bg-primary text-white py-2 rounded hover:bg-orange-600">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Bengal Coding Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
