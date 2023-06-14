import React, { useState } from 'react';
// import './style.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill out all the fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    fetch('https://getform.io/f/4a6c51b5-115a-468e-9042-3aa8c3a1e6e5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('Thank you for your message! Hope to get in touch soon!');

  };

  return (
    <div name='contact' className='font-default text-base w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>Contact</p>
          <p className='py-6'>Fill out the form below to get in contact with me!</p>
        </div>

        <div className='flex justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your E-mail'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              placeholder='Enter your message...'
            ></textarea>
            {errorMessage && (
              <p className='text-yellow-500 my-2'>{errorMessage}</p>
            )}
            <button
              type='submit'
              className='text-white bg-gradient-to-b from-pink-500 to-yellow-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Submit!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
