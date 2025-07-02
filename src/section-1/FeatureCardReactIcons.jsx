import React from 'react';
import { FaBox, FaLock, FaSyncAlt } from 'react-icons/fa'; // Import specific icons from react-icons/fa

const FeatureCardReactIcons = ({ IconComponent, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-5 mx-5 my-5 lg:my-0 flex-1 min-w-[280px] max-w-sm">
      <div className="text-white text-6xl mb-5">
        <IconComponent />
      </div>
      <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-white text-opacity-80 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const FeatureSectionReactIcons = () => {
  return (
    <div className='flex justify-center items-center p-4 mb-40'>
      <div className="bg-red-600 flex flex-col lg:flex-row items-center  min-h-[250px] w-[80%] justify-center py-4 px-4">
        <FeatureCardReactIcons
          IconComponent={FaBox}
          title="Free Shipping Method"
          description="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
        />
        <FeatureCardReactIcons
          IconComponent={FaLock}
          title="Secure Payment System"
          description="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
        />
        <FeatureCardReactIcons
          IconComponent={FaSyncAlt}
          title="Secure Payment System"
          description="aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd."
        />
      </div>
    </div>
  );
};

export default FeatureSectionReactIcons;