import React from 'react';
import { EducationCard } from '../components'; // Import the EducationCard component

const Education = () => {
  return (
    <section id="education" className="w-full bg-none py-12 rounded-b-lg b">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-designColor">Education</h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Example Education Cards */}
            <EducationCard
              title="Bachelor's Degree in Mechatronic Engineering"
              institution="Dedan Kimathi University of Technology"
              date="June 2020 - 2025"
              description=""
            />
            <EducationCard
              title="Kenya Certificate of Secondary Education"
              institution="Njiri High School"
              date="February 2016 - November 2019"
              
            />
            <EducationCard
              title="Kenya Certificate of Primary Education"
              institution="Mwiki Primary School"
              date="September 2014- November 2015"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
