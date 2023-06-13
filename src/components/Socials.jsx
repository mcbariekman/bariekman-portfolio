import React from 'react';
import { RxLinkedinLogo } from 'react-icons/rx';
import { SlSocialGithub} from 'react-icons/sl';
import { TbMailForward } from 'react-icons/tb';
import { BsPersonVcard } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <RxLinkedinLogo size={30}/>
                    </>
            ),
            href:'https://www.linkedin.com/in/george-lin-504b57250/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github <SlSocialGithub size={30}/>
                    </>
            ),
            href:'https://github.com/lingeorge88',

        },
        {
            id: 3,
            child: (
                <>Resume<BsPersonVcard size={30}/>
                    </>
            ),
            href:'resume.pdf',
            download: true,
        },
        {
            id: 4,
            child: (
                <>Email <TbMailForward size={30}/>
                    </>
            ),
            href:'mailto:lingeorge04@gmail.com ',
            
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

    {links.map(({id, child, href, style, download}) => (
        <li key={id} className={'font-default text-sm flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+ " " + style}>
        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
            {child}
            </a>
            </li>
    ))}

            
        </ul>
    </div>
  )
}

export default Socials;