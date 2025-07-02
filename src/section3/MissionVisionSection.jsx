import React from 'react';
import FeatureSectionReactIcons from '../section-1/FeatureCardReactIcons';

const MissionVisionSection = () => {
  return (
    <>
    <div className="container w-screen mb-40 flex justify-center items-start px-60 flex-col mx-auto py-16 font-sans bg-white">
      {/* Our Mission Section */}
      <div className="mb-20"> {/* Margin-bottom to separate this section from the next */}
        {/* Container for the red line and heading, using flexbox for alignment */}
        <div className="flex items-center mb-8"> {/* Adjusted mb-6 to mb-8 for more space */}
          {/* Red decorative line */}
          <div className="w-16 h-1 bg-red-500 mr-4"></div> {/* Adjusted h-0.5 to h-1 for thicker line */}
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2> {/* Adjusted text-3xl to text-4xl */}
        </div>
        {/* Mission Description Paragraph 1 */}
        <p className="text-gray-700 leading-relaxed text-[16px] mb-6 max-w-2xl"> {/* Adjusted text-base to text-lg, added max-w-2xl */}
          Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum
          suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
          viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
        </p>
        {/* Mission Description Paragraph 2 */}
        <p className="text-gray-700 leading-relaxed text-[16px] max-w-2xl"> {/* Adjusted text-base to text-lg, added max-w-2xl */}
          Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho
          eiusmod tempor maecenas accumsan.
        </p>
      </div>

      {/* Our Vision Section */}
      <div>
        {/* Container for the red line and heading, using flexbox for alignment */}
        <div className="flex items-center mb-8"> {/* Adjusted mb-6 to mb-8 for more space */}
          {/* Red decorative line */}
          <div className="w-16 h-1 bg-red-500 mr-4"></div> {/* Adjusted h-0.5 to h-1 for thicker line */}
          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2> {/* Adjusted text-3xl to text-4xl */}
        </div>
        {/* Vision Description Paragraph 1 */}
        <p className="text-gray-700 leading-relaxed text-[16px] mb-6 max-w-2xl"> {/* Adjusted text-base to text-lg, added max-w-2xl */}
          Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum
          suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo
          viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
        </p>
        {/* Vision Description Paragraph 2 */}
        <p className="text-gray-700 leading-relaxed text-[16px] max-w-2xl"> {/* Adjusted text-base to text-lg, added max-w-2xl */}
          Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho
          eiusmod tempor maecenas accumsan.
        </p>
      </div>
    </div>
      <FeatureSectionReactIcons />
      </>
  );
};

export default MissionVisionSection;