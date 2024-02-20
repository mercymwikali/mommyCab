import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { HeroImage } from '../assets/Images';

const Home = () => {
  return (
      <div id='/' className="flex flex-col md:flex-row mb-12 md:mb-0 ">
        <div className='px-4 md:pr-0 md:pl-16  md:pt-14'>
          <p className='uppercase font-bold text-blue text-center md:text-start text-4xl leading-snug'>MommyCab: Your Trusted Ride for Moms & Kids</p>
          <p className='text-slate-700 leading-8 py-4 text-center md:text-start font-medium text-lg'>
          MommyCab is the go-to transportation for moms and kids—safe, reliable, and tailored for families. Our dedicated drivers prioritize your comfort and security, providing peace of mind from appointments to outings. Trust MommyCab for stress-free travel. Book your ride now!</p>
          {/* Use Link instead of Button */}
          <Link to="/about-us" smooth duration={500} className="group flex justify-center cursor-pointer w-full md:w-[40%] px-2 bg-orange hover:bg-transparent hover:text-orange hover:border-blue-500 border-2 shadow-md border-orange text-white font-bold py-3 rounded-full transition-all duration-300 mt-4">
            <p className='px-2'>Discover More</p>
            <MdKeyboardDoubleArrowRight size={25} className='-rotate-90 duration-100 ease-in group-hover:rotate-0' />
          </Link>
        </div>
        <div className=''>
          <img src={HeroImage} alt='heroSection' className='max-w-full md:max-w-[600px] overflow-hidden' />
        </div>
      </div>
  )
}

export default Home;
