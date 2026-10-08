import React from 'react';

const ResumeHeader: React.FC = () => (
  <div className="mb-4 text-center md:mb-5 [@media(max-height:750px)]:hidden">
    <h2 className="mb-2 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-3xl font-black text-transparent md:text-4xl lg:text-5xl">
      RESUME
    </h2>
    <div className="mx-auto mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-green-400 to-green-500" />
    <p className="mx-auto hidden max-w-lg text-sm text-gray-400 md:block md:text-base">
      Professional profile, experience, education, and technical skills
    </p>
  </div>
);

export default ResumeHeader;
