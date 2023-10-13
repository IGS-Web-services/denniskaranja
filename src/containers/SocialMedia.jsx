import { SocialMediaIcon } from "../components";

import {FaTwitter, FaInstagram }from "react-icons/fa"

const SocialMedia = () => {
  return (
    <section className="fixed bottom-4 left-5 gap-5 z-50">
      
      <a href="https://www.instagram.com/invites/contact/?i=tdv04nb5fdrs&utm_content=mi5slzi" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaInstagram className="text-pink-500 text-4xl hover:text-rose-600 cursor-pointer"/>
      </a>
      <a href="http://" className="flex bg-slate-300/50 p-2.5 my-1 z-50 rounded-lg rounded-bl-lg  backdrop-blur-sm">
        <FaTwitter className="text-blue-600 text-4xl hover:text-blue-400 cursor-pointer"/>
      </a>
      
      
    </section>
  );
};

export default SocialMedia;
