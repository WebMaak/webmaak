// "use client";

// import React from "react";
// import "./SecondSection.css"; // Use the CSS you shared

// // Sample data array
// const projectData = [
//  {
//     id: 1,
//     title: "Pepsales",
//     image:
//       "https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66f497dae3cb4df51079902f_Ideas%20-%20Hero%20Section%201.avif",
//     link: "https://www.pepsales.ai/",
//     tags: ["Visual Design", "Webflow", "B2B"],
//     description: "$1.1M raised in seed funding",
//   },
//   // Add more objects here for more cards
// ];

// const ProjectCards = ({ data = projectData }) => {
//   return (
//     <div className="home-case-studies-card-wrapper">
//       <div className="home-case-studies_collection-wrap w-dyn-list">
//         <div className="home-case-studies_grid_scroll grid_scroll w-dyn-items ">
//           {data.map((project) => (
//             <div key={project.id} className="home-case-studies_item fadeup w-dyn-item">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="home-case-studies_link"
//               >
//                 <div className="project_card">
//                   <div className="project_image-wrapper">
//                     <div className="project_inner-image-wrap">
//                       <img
//                         loading="lazy"
//                         src={project.image}
//                         alt={project.title}
//                         className="project_image"
//                       />
//                     </div>
//                   </div>

//                   <div className="project_content">
//                     <div className="w-dyn-list">
//                       <div role="list" className="project_tags w-dyn-items">
//                         {project.tags.map((tag, idx) => (
//                           <div key={idx} role="listitem" className="collection-item w-dyn-item">
//                             <div className="project_tag">
//                               <div>{tag}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="project_bottom-wrap">
//                       <h3 className="heading-style-h3 project-title">{project.title}</h3>
//                       <div className="wrap-content">
//                         <p className="text-size-medium problem_grid-content-pr">{project.description}</p>
//                         <div className="project_round-icon">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="100%"
//                             viewBox="0 0 46 46"
//                             fill="none"
//                             className="project_icon"
//                           >
//                             <path
//                               d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             ></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCards;

"use client";

import React, { useRef, useState } from "react";
import "./SecondSection.css";

const ProjectCards = ({ data }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (pageX) => {
    setIsDragging(true);
    setStartX(pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDrag = () => setIsDragging(false);

  const handleDrag = (pageX) => {
    if (!isDragging) return;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll speed factor
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="home-case-studies-card-wrapper">
      <div className="home-case-studies_collection-wrap w-dyn-list">
        <div
          ref={sliderRef}
          className={`home-case-studies_grid_scroll grid_scroll w-dyn-items gap-10 ${
            isDragging ? "dragging" : ""
          }`}
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseLeave={stopDrag}
          onMouseUp={stopDrag}
          onMouseMove={(e) => handleDrag(e.pageX)}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchMove={(e) => handleDrag(e.touches[0].pageX)}
          onTouchEnd={stopDrag}
        >
          {data.map((project) => (
            <div
              key={project.id}
              className="home-case-studies_item fadeup w-dyn-item md:max-w-[400px] max-h-[500px] md:max-h-[500px]"
            >
              <div className="project_card">
                {/* IMAGE */}
                <div
                  className="project_image-wrapper"
                  style={{ pointerEvents: "none" }}
                >
                  <div className="project_inner-image-wrap">
                    <img
                      loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="project_image"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="project_content"
                  style={{ pointerEvents: "none" }}
                >
                  {/* TAGS */}
                  <div className="w-dyn-list">
                    <div role="list" className="project_tags w-dyn-items">
                      {project.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          role="listitem"
                          className="collection-item w-dyn-item"
                        >
                          <div className="project_tag">{tag}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TITLE + DESCRIPTION + ICON */}
                  <div className="project_bottom-wrap">
                    {/* Title is clickable */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ pointerEvents: "auto" }}
                    >
                      <h3 className="heading-style-h2 project-title">
                        {project.title}
                      </h3>
                    </a>

                    <div className="wrap-content">
                      <p className="text-size-small problem_grid-content-pr w-[90%]">
                        {project.description}
                      </p>

                      {/* Arrow icon clickable */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project_round-icon"
                        style={{ pointerEvents: "auto" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 46 46"
                          fill="none"
                          className="project_icon"
                        >
                          <path
                            d="M16.7725 29.5059L29.9718 16.3066M29.9718 16.3066H16.7725M29.9718 16.3066V29.5059"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
