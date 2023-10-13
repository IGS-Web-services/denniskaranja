import { SectionHeading, WorkCard } from "../components";

import Work1 from "../assets/Work-1.jpeg";
import Work2 from "../assets/Work-2.jpeg";
import Work4 from "../assets/Work-4.jpeg";
import Work5 from "../assets/Work-5.jpeg";
import Work6 from "../assets/Work-6.jpeg";
import Work3 from "../assets/Work-3.jpeg";
import Work7 from "../assets/Work-7.jpeg";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show
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
      
      <div  className="w-full py-12 bg-none">
      <div className="container mx-auto">
      <SectionHeading subTitle="projects" title="featured work" />
        <Slider {...settings}>
          {/* Add your project images and descriptions here */}
          <div className="">
            <img
              src={Work1}
              alt="Project 1"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
          <div className="">
            <img
              src={Work2}
              alt="Project 2"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
          <div className="">
            <img
              src={Work3}
              alt="Project 1"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
           
          </div>
          <div className="">
            <img
              src={Work4}
              alt="Project 1"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
          <div className="">
            <img
              src={Work5}
              alt="Project 5"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
          <div className="">
            <img
              src={Work6}
              alt="Project 6"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
          <div className="">
            <img
              src={Work7}
              alt="Project 7"
              className="mx-auto h-40 w-64 object-cover rounded-md"
            />
            
          </div>
        </Slider>
      </div>
    </div>
    </article>
  );
};

export default Work;
