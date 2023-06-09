import React, { useState } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('about');

  const handleNavigationClick = (event, sectionId) => {
    event.preventDefault();
    setActiveNavItem(sectionId);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    event.target.reset();
  };

  const sections = [
    { id: 'about', title: 'About Me', content: 'Hi, I\'m Madilyn Bariekman, also known as MC Bariekman. I\'m an aspiring web designer looking to get more computer science knowledge and gain more experience with practical coding in order to enter the industry equipped with the education necessary to succeed.' },
    { id: 'portfolio', title: 'Portfolio', content: 'Your portfolio content goes here...' },
    { id: 'contact', title: 'Contact', content: 'Your contact content goes here...' },
    { id: 'resume', title: 'Resume', content: 'Your resume content goes here...' }
  ];

  return (
    <div>
      <Header
        sections={sections}
        activeNavItem={activeNavItem}
        handleNavigationClick={handleNavigationClick}
      />

      {sections.map(section => (
        <Section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </Section>
      ))}

      <Contact handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
