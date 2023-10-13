import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experienceData = [
    {
      title: 'Dedan Kimathi University - Admat Sector',
      date: '2021',
      description: 'Learned how to perform basic metal fabrication processes and other mechanical operations.',
    },
    {
      title: 'Mechatronics Lab, Dedan Kimathi University',
      date: '2022',
      description: 'Learned the various pneumatic and hydraulic processes, various types of electrical connections, motors, sensors, etc.',
    },
    {
      title: 'DIY_CUSTOMS_KENYA Wood Workshop',
      date: '2023',
      description: 'Excelled in creative woodworking, further enhancing skills and expertise in woodworking.',
    },
    // Add more experience entries as needed
  ];

  return (
    <section id="experience" className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Experience</h2>
        <div className="mt-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              date={experience.date}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
