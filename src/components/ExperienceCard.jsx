import React from 'react';

const ExperienceCard = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceCard;
