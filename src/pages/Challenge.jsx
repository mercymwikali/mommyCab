import React from 'react';
import { ch, two } from '../assets/Images';

const Challenge = () => {
  return (
    <div  id='/challenge' className="grid grid-cols-1 gap-4 md:grid-cols-2 my-14 px-4">
      <div className="card flex flex-col md:flex-row items-center">
        <img src={ch} alt="Challenge" className="w-full h-auto md:w-1/2 md:h-auto" />
        <div className="p-4 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Challenge</h2>
          <p className="text-gray-700">
            MommyCab recognizes the difficulties moms face in finding safe and reliable transportation options for their families, especially with young children in tow.
          </p>
        </div>
      </div>
      <div className="card flex flex-col md:flex-row items-center">
        <img src={two} alt="Solution" className="w-full h-auto md:w-1/2 md:h-auto" />
        <div className="p-4 md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Our Challenge</h2>
          <p className="text-gray-700">
            We understand the need for a dedicated transportation service that caters specifically to the needs of moms and kids, ensuring their safety and comfort on every journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
