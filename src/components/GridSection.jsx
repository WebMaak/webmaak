import Image from "next/image";
import { useState } from "react";

const gridData = [
  {
    title: "Kurti",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
  {
    title: "Slevless",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
  {
    title: "Shirt",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
  {
    title: "T-Shirt",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
  {
    title: "Jacket",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
  {
    title: "Skirt",
    img: "/hero-bg.png",
    hoverImg: "/hero-image-trial.JPG",
  },
];


const GridSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center md:h-[400px] lg:h-[600px] overflow-hidden">
      {gridData.map((item, index) => (
        <div
          key={index}
          className={`relative overflow-hidden transition-all duration-500 ease-in-out 
            ${hovered === index ? "flex-[2_2_300px] aspect-square shadow-lg" : "flex-1 aspect-square"}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Base Image */}
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />

          {/* Hover Image */}
          <Image
            src={item.hoverImg}
            alt={item.title}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: hovered === index ? 1 : 0,
              transitionDelay: hovered === index ? "0.6s" : "0s",
            }}
          />

          {/* Title and Button */}
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <span className="text-white bg-black/50 px-2 py-1 rounded">{item.title}</span>

            {/* Animated button */}
            <button
                className={`px-3 py-1 bg-white text-black rounded transform transition-all duration-500 
                ${hovered === index ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-75 -translate-x-2 pointer-events-none"} 
                hover:bg-gray-200`}
            >
                Products
            </button>
            </div>

        </div>
      ))}
    </div>
  );
};

export default GridSection;


// usage

{/* <div className="mx-auto max-w-[1240px] px-4">
      <GridSection />
      </div> */}