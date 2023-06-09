import React from 'react';

function Header({ sections, activeNavItem, handleNavigationClick }) {
  return (
    <header>
      <h1>Web Developer Portfolio</h1>
      <nav>
        <ul>
          {sections.map(section => (
            <li
              key={section.id}
              className={activeNavItem === section.id ? 'active' : ''}
            >
              <a
                href={`#${section.id}`}
                onClick={(event) => handleNavigationClick(event, section.id)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
