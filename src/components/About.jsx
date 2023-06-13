import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-130vh font-default text-base font-medium w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Hello! Welcome to my portfolio page! My name is George, I am a web developer who recently graduated from a coding bootcamp with a degree in Medical Laboratory Science with 3 years of experience in the field. The bootcamp was an incredible experience where I learned incredible amounts of skill and knolwedge in a short span of time. I look forward to learning continuously in my coding journey! I am currently seeking an associate role with a focus on front-end development.
            </p>
            <br />
            <p className='text-xl'>
            Being a Medical Laboratory Scientist for the past several years has helped prepare me for what is required and useful in web developement. Working in a high-volume reference laboratory in a 600 bed hospital has helped me develop excellent attention-to-detail skills while working efficiently to ensure targeted turnaround times for patient results.  I look forward to bringing my skills into the field of web development and coding!  I hope to obtain AWS certification following the completion of my bootcamp and dive into machine-learning by learning Python.

            </p>
            </div>
            
            
        
    </div>
  )
}

export default About