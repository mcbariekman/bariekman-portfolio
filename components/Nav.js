import React from 'react';

function Nav({ sections, activeNavItem, handleNavigationClick }) {
  return (
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
  );
}

export default Nav;
