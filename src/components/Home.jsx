import React from 'react';
import HeroImage from '../assets/clickforflicks.png';
import { TiArrowRightOutline}from "react-icons/ti";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='font-default text-2xl sm:text-7xl font-bold'>Welcome</h2>
                <p className='font-default text-gray-500 py-4 max-w-md text-base'>
                    I am a fullstack developer that focuses on the MERN stack, I have built projects utilizing React, Bootstrap, Framework, Tailwind, MongoDB and GraphQL. My goal is to learn game development.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500}className='group text-white text-base w-fit px-6 py-3 my-2 flex font-default item-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer hover:scale-105 duration-200 '>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <TiArrowRightOutline size={25} className='ml-1'/>
                            </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="profileImage" className='rounded-2xl mx-auto w-2/3 md:w-full' style={{ overflowY: 'scroll' }}/>
            </div>
        </div>
    </div>
  )
}

export default Home;