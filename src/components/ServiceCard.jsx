const ServiceCard = ({ image, heading, body }) => {
  return (
    <article className="service section_hidden rounded-lg aspect-square w-full h-full flex flex-col items-center justify-start bg-tranparent gap-3">
      <img
        src={image}
        alt="Alternative image"
        className=" rounded-lg shadow-xl shadow-slate-400 w-full h-60"
      />
      <figcaption className=" flex flex-col justify-start items-center  gap-2 py-2">
        <h3 className="text-center text-lg font-bold ">{heading}</h3>
        <p className="text-center">{body}</p>
      </figcaption>
    </article>
  );
};

export default ServiceCard;
