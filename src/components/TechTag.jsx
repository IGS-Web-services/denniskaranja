const TechTag = ({ text }) => {
  return (
    <p className="px-2 rounded-lg flex items-center text-xs justify-center bg-blue-200 text-blue-600 my-1 ">
      #{text}
    </p>
  );
};

export default TechTag;
