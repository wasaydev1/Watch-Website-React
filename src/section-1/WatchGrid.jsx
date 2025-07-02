import React from "react";

const WatchGrid = () => {
  const watchImages = [
    "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png",
    "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png",
    "https://cdn.pixabay.com/photo/2022/09/21/06/35/watch-7469601_640.jpg",
    "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png",
    "https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png",
    "https://cdn.pixabay.com/photo/2017/03/20/15/13/wrist-watch-2159351_640.jpg",
  ];

  return (
    <div className="p-4 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {watchImages.map((src, index) => (
          <div key={index} className="WatchGrid rounded-xl overflow-hidden shadow-md">
            <img src={src} alt={`Watch ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchGrid;
