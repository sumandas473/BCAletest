import { useState } from "react";
import { Link } from "react-router-dom";
import bcalogo from "../assets/BCA-logo.png";
import { useSelector } from "react-redux"; 
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaShoppingBag,
} from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
 

  return (
    <header className="shadow-sm bg-gradient-to-r from-[#fdf7e9] to-[#eef3fb] fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
  <img src={bcalogo} alt="Logo" className="" />
  
</Link>

          {/* Search Input */}
          <div className="hidden lg:flex flex-1 max-w-3xl mx-4 bg-white rounded-full overflow-hidden shadow-sm">
            <select className="px-4 py-2 bg-white text-sm text-gray-600 outline-none">
              <option>All Categories</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
            </select>
            <input
              type="text"
              placeholder="Search your courses..."
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="bg-purple-600 px-6 text-white text-sm font-medium hover:bg-purple-700">
              Search
            </button>
          </div>

          {/* Social Icons + Auth */}
          <div className="hidden md:flex items-center gap-4 text-gray-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaInstagram /></a>

            <Link to="/register" className="bg-yellow-400 px-4 py-2 rounded-full text-sm font-semibold text-black hover:bg-yellow-500">
              Register
            </Link>
            <Link to="/login" className="bg-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-gray-100">
              Log In
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Bottom Menu (Desktop) */}
        <div className="hidden md:flex items-center justify-between py-3 border-t border-gray-200 text-sm text-gray-700">
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-purple-600">Home</Link>
            <Link to="/courses" className="hover:text-purple-600">Courses</Link>
            {/* <Link to="/pages" className="hover:text-purple-600">Pages</Link> */}
           
            <Link to="/about" className="hover:text-purple-600">About Us</Link>
            <Link to="/contact" className="hover:text-purple-600">Contact Us</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span>+532 321 33 33</span>
            <span>•</span>
            <span>bengalcodingacademy@gmail.com</span>
          </div>

          <div className="flex items-center gap-5">
             <Link to="/cart" className="relative">
        <FaShoppingBag className="text-lg" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        )}
      </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden transition-all duration-700 ease-in-out border-t border-gray-200 py-4 text-sm text-gray-700">
    <nav className="flex flex-col gap-4 px-2">
      <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Home</Link>
      <Link to="/courses" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Courses</Link>
      {/* <Link to="/pages" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Pages</Link> */}
      {/* <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">News</Link> */}
      <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">About Us</Link>
      <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-purple-600">Contact Us</Link>
      <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="text-yellow-600 font-medium">Register</Link>
      <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-purple-600 font-medium">Log In</Link>
      <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
        <FaShoppingBag />
        Cart {totalItems > 0 && (
          <span className=" bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  </div>
)}

      </div>
    </header>
  );
}
