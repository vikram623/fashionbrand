import React, { useState } from "react";

const slides = [
  {
    url: "https://img.freepik.com/free-psd/gradient-fashion-youtube-cover-template_23-2150014572.jpg",
    title: "Nature",
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-texture-boutique-template_23-2149317471.jpg",
    title: "Technology",
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-fashion-collection-youtube-thumbnail_23-2149919633.jpg?semt=ais_hybrid&w=740&q=80",
    title: "City Life",
  },
  {
    url: "https://img.freepik.com/free-psd/landing-page-fashion-style-clothing-with-woman_23-2149001967.jpg?semt=ais_hybrid&w=740",
    title: "Mountains",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
    <div className="w-full mb-20 relative overflow-hidden h-[60vh] my-20">
      {/* Image */}
      <img
        src={slides[current].url}
        alt={slides[current].title}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
};

export default ImageSlider;
