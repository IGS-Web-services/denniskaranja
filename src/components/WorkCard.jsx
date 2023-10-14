const WorkCard = ({ image, name, description, link }) => {
  return (
    <section className="work   rounded-lg  aspect-square w-full flex flex-col items-center justify-start h-full   cursor-pointer pb-1  ">
      <figure className="rounded-l w-full h-[60%] relative group ">
        <a href={link}>
          <img
            src={image}
            alt="Alternative image"
            className="rounded-lg h-full aspect-video"
          />
        </a>
      </figure>
      <figcaption className="relative flex flex-col justify-center items-center px-2  text-center h-[40%] w-full bg-transparent ">
        <h1 className="text-white text-lg px-4 py-0.5 rounded-full  font-extrabold capitalize  text-[14px]">
          {name}
        </h1>
        <p className=" text-[15px] text-white font-thin  text-center w-full">
          {description}
        </p>
      </figcaption>
    </section>
  );
};

export default WorkCard;
