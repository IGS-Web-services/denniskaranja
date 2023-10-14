import { SectionHeading, WorkCard } from "../components";

import Work1 from "../assets/Work-1.jpeg";
import Work2 from "../assets/Work-2.jpeg";
import Work4 from "../assets/Work-4.jpeg";
import Work5 from "../assets/Work-5.jpeg";
import Work6 from "../assets/Work-6.jpeg";
import Work3 from "../assets/Work-3.jpeg";


import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const featuredWork = [
  { _id: 100, image: Work1, alt: "Project 1" },
  { _id: 102, image: Work2, alt: "Project 2" },
  { _id: 103, image: Work3, alt: "Project 3" },
  { _id: 104, image: Work4, alt: "Project 4" },
  { _id: 105, image: Work5, alt: "Project 5" },
  { _id: 106, image: Work6, alt: "Project 6" },


]

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          
        },
      },
    ],
  };
  return (
    <article
      id="projects"
      className="backdrop-blur-md bg-black/40 relative w-full py-16  "
    >

      <div className="w-full py-12 bg-none">
        <div className="container mx-auto">
          <SectionHeading subTitle="projects" title="featured work" className='text-white' />
          <Slider {...settings} className="flex gap-4">
            {/* Add your project images and descriptions here */}
            {
              featuredWork.map((project) =>
              (
                <div className="px-2">
                  <img
                    key={project._id}
                    src={project.image}
                    alt={project.alt}
                    className="mx-auto w-full h-80 sm:h-96  w-auto object-cover rounded-md"
                  />
                </div>
              )


              )
            }


          </Slider>
        </div>
      </div>
    </article>
  );
};

export default Work;
