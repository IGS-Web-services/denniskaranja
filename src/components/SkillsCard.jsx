import React from 'react';

const SkillsCard = ({ title, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <ul className="list-disc text-gray-600 ml-6">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
