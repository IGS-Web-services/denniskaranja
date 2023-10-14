import { SectionHeading, Experience } from "../components";
import Skills from "../components/Skill";


const SkillsAndExperience = () => {

  return (
    <article
      id="skills"
      className=" relative w-full  bg-slate-100  flex flex-col items-center justify-start py-16 md:pb-32 rounded-b-lg"
    >
      <SectionHeading subTitle='skills and experience' title="My Skills And Experience" />
      <section className="flex flex-col md:flex-row  items-center justify-center md:justify-between md:px-10 w-full gap-3 sm:gap-10  md:h-auto rounded-b-lg">
        <section className="section_hidden flex flex-col skill  gap-3 p-3 h-full ">
          <Skills />
        </section>
        <section className="section_hidden skill experiences rounded-lg flex flex-col px-5 py-3 sm:px-10 gap-1 h-full">
          <Experience />
        </section>
      </section>
    </article>
  );
};

export default SkillsAndExperience;
