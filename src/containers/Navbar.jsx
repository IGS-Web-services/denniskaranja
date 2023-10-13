import React, { useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import profile from '../assets/profile.jpeg'

const navLinkData = [
  { _id: 1001, title: 'Home', link: '' },
  { _id: 1002, title: 'About', link: '#about' },
  { _id: 1003, title: 'Services', link: '#services' },
  { _id: 1004, title: 'Work', link: '#projects' },
  { _id: 1005, title: 'Skills', link: '#skills' },
  { _id: 1006, title: 'Education', link: '#education' },
  { _id: 1006, title: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className='h-24 bg-white w-full sticky top-0 z-50'>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <img className="h-16 w-16 shadow-lg shadow-white rounded-full" src={profile} alt="Dennis" />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? <FiX className="text-designColor text-5xl" /> : <FiMenu className="text-designColor text-5xl" />}
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
          <ul className="text-lg md:flex">
            {navLinkData.map((link) => (
              <li key={link._id} className="ml-4 lg:ml-6">
                <a
                  href={link.link}
                  className="text-designColor hover:text-primary cursor-pointer"
                  onClick={() => {
                                   
                    toggleNavbar();
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
