import React from 'react';
// Assuming FeatureSectionReactIcons is a separate component
import FeatureSectionReactIcons from '../section-1/FeatureCardReactIcons'; 

// A reusable component for the Mission and Vision sections
const MissionVisionBlock = ({ title, paragraphs }) => (
  <div>
    <div className="flex items-center mb-6">
      <div className="w-12 h-1 bg-red-500 mr-4 md:w-16"></div>
      <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">{title}</h2>
    </div>
    {paragraphs.map((text, index) => (
      <p key={index} className="text-gray-700 leading-relaxed text-base mb-4 max-w-2xl">
        {text}
      </p>
    ))}
  </div>
);

const MissionVisionSection = () => {
  // Text data for the mission and vision sections
  const missionText = [
    'Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.',
    'Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.'
  ];

  const visionText = [
    'Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.',
    'Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.'
  ];

  return (
    <>
      <div className="container mx-auto px-6 lg:px-20 py-16 font-sans bg-white">
        <div className="flex flex-col gap-20">
          <MissionVisionBlock title="Our Mission" paragraphs={missionText} />
          <MissionVisionBlock title="Our Vision" paragraphs={visionText} />
        </div>
      </div>
      <FeatureSectionReactIcons />
    </>
  );
};

export default MissionVisionSection;