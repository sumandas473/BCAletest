import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-gray-100 p-6 text-center rounded-md">
        <div className="text-purple-600 text-2xl mb-2 mx-auto w-fit">
          <FaPhoneAlt />
        </div>
        <p className="text-sm text-gray-700 font-semibold">+64 939-39-0239</p>
        <p className="text-sm text-gray-700 font-semibold">+54 939-739-02399</p>
      </div>

      <div className="bg-gray-100 p-6 text-center rounded-md">
        <div className="text-purple-600 text-2xl mb-2 mx-auto w-fit">
          <FaEnvelope />
        </div>
        <p className="text-sm text-gray-700 font-semibold">bengalcodingacademy@gmail.com</p>
        <p className="text-sm text-gray-700 font-semibold">www.bengalcodingacademy.com</p>
      </div>

      <div className="bg-gray-100 p-6 text-center rounded-md">
        <div className="text-purple-600 text-2xl mb-2 mx-auto w-fit">
          <FaMapMarkerAlt />
        </div>
        <p className="text-sm text-gray-700 font-semibold">
          Kolkata, West Bengal, India
          
        </p>
      </div>
    </div>
  );
};

export default ContactCards;
