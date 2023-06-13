import React from 'react';
import { RxLinkedinLogo } from 'react-icons/rx';
import { SlSocialGithub, SlSocialYoutube} from 'react-icons/sl';

const Footer = () => {

    const links =[
        {
            id: 1,
            child : (
                <RxLinkedinLogo size={25}/>
            ),
            href:'https://www.linkedin.com/in/george-lin-504b57250/',
            
        },
        {
            id: 2,
            
            child: (
                 <SlSocialGithub size={25}/>
            ),
            href:'https://github.com/lingeorge88',
        },
        {
            id: 3,
            child: (
                <SlSocialYoutube size={25}/>
            ),
            href: 'https://www.youtube.com/@georgelin5569/'
        }
    ]

    return (
        <div name="footer" className="flex text-bold text-base w-full h-20 bg-gray-900 text-white justify-center items-center">
          <div>
            <h2 className="text-2xl">© George Lin 2023</h2>
          </div>
          <div className="flex ml-4">
            {links.map((link) => (
              <a key={link.id} href={link.href} className="ml-4"  target="_blank" rel="noopener noreferrer">
                {link.child}
              </a>
            ))}
          </div>
        </div>
      );
}

export default Footer