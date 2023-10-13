import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component

const Skills = () => {
  const skillsData = [
    {
      title: 'Technical Skills',
      skills: [
        'Conversant with Microsoft packages',
        'Creative and innovative in mechanical design',
        'Professional woodcrafter',
      ],
    },
    {
      title: 'Soft Skills',
      skills: ['Great communication and sales skills'],
    },
  ];

  return (
    <section id="skills" className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Skills</h2>
        <div className="mt-8">
          {skillsData.map((skillsEntry, index) => (
            <SkillsCard
              key={index}
              title={skillsEntry.title}
              skills={skillsEntry.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
