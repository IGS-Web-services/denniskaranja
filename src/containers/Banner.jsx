import banner from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Banner = () => {
  return (
    <article
      id="about"
      className="backdrop-blur-sm bg-black/40 relative w-full md:h-1--vh flex flex-col items-center md:flex-row gap-16 p-16 "
    >
      <figcaption className="section_hidden  relative w-full md:w-[50%] flex flex-col items-center md:items-start justify-center  debug text-center h-full ">
        <section className="w-full h-full flex flex-col gap-2 items-start justify-center p-4">
          <h2 className="text-2xl sm:text-4xl uppercase font-bold text-white ">
            I am <span className="text-orange-600">Dennis Karanja </span>
          </h2>
          <p className="text-md text-white sm:text-lg text-center md:text-start pt-3 pb-10 ">
            A <span className="">Mechatronic Engineer</span> with keen
            interest in mechanical design, wood-crafting, and sales.
          </p>

          <a
            href={resume}
            download="Resume"
            className="bg-orange-600 hover:bg-orange-500 h-12 rounded-full px-4  text-white w-[80%] sm:w-56 flex flex-row items-center justify-center mx-auto md:mx-0"
          >
            View Resume
          </a>
        </section>
      </figcaption>
      <img
        className="md:w-[400px]  h-auto rounded-full"
        src={banner}
        alt="Banner Image "
      />
      <div className="custom-shape-divider-bottom-1694798741">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default Banner;
