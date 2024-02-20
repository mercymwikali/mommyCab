import React from 'react'
import { ImTarget } from "react-icons/im";
import { FaRegLightbulb, FaRegHandshake } from "react-icons/fa";

export const Values = () => {
  return (
    <div id='/values' className="max-w-screen-xl my-4 px-4 md:px-0 mx-auto py-8 ">
      <div className="max-w-screen-3xl mx-auto text py-4 my-3">
        <p className='text-2xl text-center capitalize font-bold md:text-4xl text-blue'>Mission, Vision<span className='text-red'> & Commitment.</span></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden mx-auto">
              <ImTarget size={36} className='text-blue' />
            </div>
            <h5 className='text-2xl md:text-medium text-center font-medium mt-3'>Our Mission</h5>
            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>MommyCab empowers pregnant women and families with safe, reliable transportation, ensuring access to essential destinations. We prioritize safety, comfort, and convenience, supporting maternal and child health during pregnancy and early parenthood.</p>
          </div>
        </div>
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden mx-auto">
              <FaRegLightbulb size={36} className='text-blue' />
            </div>
            <h5 className='text-2xl md:text-medium  text-center font-medium mt-3'>Our Vision</h5>
            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>To be Africa's premier provider of specialized transportation for expectant mothers and families, revolutionizing mobility through technology and community engagement, and improving maternal and child health outcomes continent-wide.</p>
          </div>
        </div>
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden mx-auto">
              <FaRegHandshake size={36} className='text-blue' />
            </div>
            <h5 className='text-2xl md:text-medium text-center font-medium mt-3'>Our Commitment</h5>
            <p className='text-slate-500 text-normal pt-3 leading-relaxed'>MommyCab is committed to safety, reliability, compassion, innovation, and community engagement, ensuring every journey is a stress-free experience for our passengers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
