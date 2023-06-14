import React from 'react';
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
// import installNode from '../assets/portfolio/installNode.jpg';
// import navbar from '../assets/portfolio/navbar.jpg';
// import reactParallax from '../assets/portfolio/reactParallax.jpg';
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
// import reactWeather from '../assets/portfolio/reactWeather.jpg';
import Techtopia from '../assets/portfolio/Techtopia.png';
import WeatherApp from '../assets/portfolio/WeatherApp.png';
import CrimeTracker from '../assets/portfolio/CrimeTracker.png';
import JobstacleCourse from '../assets/portfolio/JobstacleCourse.png';
import NoteTaker from '../assets/portfolio/NoteTaker.png';
import SocialAPI from '../assets/portfolio/SocialAPI.png';
import PokeTrader from '../assets/portfolio/PokeTrader.png';


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Techtopia,
            demoUrl:'https://salty-escarpment-75957.herokuapp.com/',
            codeUrl: 'https://github.com/lingeorge88/Tech_topia_MVC',
            title: "TechTopia",
            description: 'A tech blog utilizing NodeJS, ExpressJS and the Sequelize Package'
        },
        {
            id: 2,
            src: --,
            demoUrl:'--',
            codeUrl:'--',
            title: '--',
            description: "--"
        },
        {
            id: 3,
            src: --,
            demoUrl:'--',
            codeUrl:'--',
            title: "--",
            description: "--"
        },
        {
            id: 4,
            src: --,
            demoUrl:'--',
            codeUrl:'--',
            title: "--",
            description:'--'
        },
        {
            id: 5,
            src: PokeTrader,
            demoUrl:'https://poketraderv1.herokuapp.com/',
            codeUrl:'https://github.com/lingeorge88/Poke_Trader',
            title: "Poké Trader",
            description: "A full stack MERN application that allows Pokemon TCG enthusiasts to connect and trade their card collections with others"
        },
        {
            id: 6,
            src: --,
            demoUrl:'--',
            codeUrl:'--',
            title: '--',
            description:'--'
        },
    ]
    function handleDemoClick(demoUrl) {
        window.open(demoUrl, "_blank");
      };

      function handleCodeClick(codeUrl) {
        window.open(codeUrl, "_blank");
      };
  return (
    <div name="portfolio" className='font-default text-base bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mt-20 pb-8 sm:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id, src, demoUrl, codeUrl,title,description}) =>(
                
            <div key={id} className='shadow-md shadow-purple-500 rounded-lg duration-200 hover:scale-105'>
                <h2 className="text-xl text-center font-bold shadow-md shadow-indigo-500">{title}</h2>
            <p className='text-sm m-2'>{description}</p>
                <img src={src} alt="" className='rounded-md '/>
                <div className='flex item-center justify-center'>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleDemoClick(demoUrl)}>Demo</button>
                    <button className='w-1/2 px6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleCodeClick(codeUrl)}>Code</button>
                </div>
            </div>
        
            ))
        }
    </div>
    </div>
    </div>
  )
}

export default Portfolio;