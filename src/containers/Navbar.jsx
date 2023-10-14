import React, { useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import profile from '../assets/profile.jpeg';

const navLinkData = [
  { _id: 1001, title: 'Home', link: '#home' },
  { _id: 1003, title: 'Services', link: '#services' },
  { _id: 1004, title: 'Work', link: '#projects' },
  { _id: 1005, title: 'Skills', link: '#skills' },
  { _id: 1006, title: 'Education', link: '#education' },
  { _id: 1007, title: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className={`fixed top-0 w-full bg-white z-50 ${isOpen ? 'h-auto' : 'h-24'}`}>
      <div className={`container mx-auto p-4 flex justify-between items-center ${isOpen ? 'flex-col lg:flex-row ' : 'flex-row'}`}>
        <div className="flex items-center w-full ">
          <div className="flex-shrink-0">
            <img className="h-16 w-16 shadow-lg shadow-white rounded-full" src={profile} alt="Dennis" />
          </div>
          <div className="flex-grow"></div>
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
              {isOpen ? <FiX className="text-designColor text-5xl" /> : <FiMenu className="text-designColor text-5xl" />}
            </button>
          </div>
        </div>
        
        <div className={`${isOpen ? 'block border-t lg:border-none border-t-designColor border-t-1' : 'hidden'}  lg:flex lg:items-end mt-4 lg:mt-0  w-screen h-full items-center justify-center`}>
          <ul className="text-lg lg:flex">
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
