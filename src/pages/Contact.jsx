import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-scroll';

const Contact = () => {
  const navLinks = [
    { id: 1001, label: "Home", key: "/" },
    { id: 1002, label: "About Us", key: "/about-us" },
    { id: 1003, label: "Challenge", key: "/challenge" },
    { id: 1004, label: "Values", key: "/values" },
    { id: 1005, label: "Contact Us", key: "/contact-us" },
];


  return (
    <div id='/contact-us' className="bg-blue text-white">
      <div className="max-w-screen-xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-start ml-16 gap-2 cursor-pointer">
            <h5 className='text-center font-bold text-2xl py-1'>Contacts</h5>
            <div className="flex items-center space-x-4">
              <MdEmail size={25} />
              <div className="rounded-xl overflow-hidden">
                <h5 className=' font-medium'>Email</h5>
                <p className='text-slate-200 font-normal'>mommyCab@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <FaPhoneAlt size={25} />
              <div className="rounded-xl overflow-hidden">
                <h5 className='font-medium'>Phone</h5>
                <p className='text-slate-200 font-normal'>+254-708-451-590.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-2">
              <IoLocation size={25} />
              <div className="flex flex-col items-start space-x-4 ">
                <h5 className='font-medium'>Address</h5>
                <p className='text-slate-200 font-normal'>
                  <a href="https://www.google.com/maps/dir//Airport+North+Road,+P.O.Box+18628-00500,+Nairobi,+Kenya,+Eastern+Bypass,+Nairobi/@-1.3285153,36.8080533,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f126cba09e533:0xc931e36004533ba7!2m2!1d36.8904553!2d-1.3285167?entry=ttu:">SouthField Mall,Eastern Bypass Rd.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <h5 className='text-center font-bold text-2xl py-1'>Our Company</h5>
            <div className='flex ml-16 text-gray-300 w-full'>
              <ul className='flex flex-col text-start gap-y-4'>
                {navLinks.map(({ _id, label, key }) => (
                  <li
                    key={_id}
                    className="cursor-pointer capitalize font-medium hover:text-red duration-200"
                  >
                    <Link to={key} smooth duration={500}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
