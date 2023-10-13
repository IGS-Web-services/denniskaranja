import React from 'react';

const EducationCard = ({ title, institution, date, description }) => {
  return (
    <div className= " section_hidden bg-slate-100 rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-2">{institution}</p>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EducationCard;
