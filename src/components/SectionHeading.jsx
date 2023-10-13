const SectionHeading = ({ title, subTitle }) => {
  return (
    <header>
      <h2 className="uppercase text-xs text-sm  font-bold text-slate-700 text-center my-1">
        {subTitle}
      </h2>
      <h2 className="uppercase text-xl text-4xl font-bold text-center text-orange-500 my-1 sm:my-3">
        {title}
      </h2>
    </header>
  );
};

export default SectionHeading;
