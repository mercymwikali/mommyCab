import React from 'react';
import { soln } from '../assets/Images';

const About = () => {
  return (
    <div  id='/about-us' className="flex flex-col md:flex-row items-center justify-center my-14 px-4">
      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
        <img src={soln} alt="solution" className="max-w-full md:max-w-[400px] mx-auto md:mx-0" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl text-center md:text-left font-bold text-blue mb-4">About Us</h2>
        <p className="text-lg text-gray-700 text-center md:text-left leading-8">
          At MommyCab, we understand the unique needs of families when it comes to transportation.
          Our mission is to provide safe, reliable, and tailored transportation solutions designed specifically for moms and their children.
          With MommyCab, you can rest assured that our caring drivers prioritize your comfort and security.
          Whether it's appointments, school runs, or outings, trust MommyCab for stress-free travel every time.
        </p>
      </div>
    </div>
  );
};

export default About;
