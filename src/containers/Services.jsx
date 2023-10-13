// COMPONENTS
import { ServiceCard, SectionHeading } from "../components";

// IMAGES
import Work6 from "../assets/Work-6.jpeg";
import Work7 from "../assets/Work-7.jpeg";
import Work8 from "../assets/Work-8.jpeg";


const Services = () => {
  return (
    <article
      id="services"
      className=" relative w-full bg-slate-100 py-16 service rounded-b-lg b"
    >
      <SectionHeading subTitle="Services" title="Featured services" />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center px-5 sm:px-10 md:px-15 rounded-b-lg">
        <ServiceCard
          image={Work8}
          heading="Mechanical Design"
          body="Designing mechanical parts such as gears, shafts, etc."
        />
        <ServiceCard
          image={Work6}
          heading="DIY Wood crafting"
          body="Crafting impressive furniture and other products."
        />
        <ServiceCard
          image={Work7}
          heading="Carpentry"
          body=" Designing and making the best furniture for our customers, with aesthetics and egornomics in mind "
        />

       
      </section>
    </article>
  );
};

export default Services;
