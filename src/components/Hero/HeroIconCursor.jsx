// import { useState, useEffect } from 'react';

// export default function HeroIconCursor({ children }) {
//   const [hoverText, setHoverText] = useState('');
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
//   const targetPos = useState({ x: 0, y: 0 })[0];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       targetPos.x = e.clientX;
//       targetPos.y = e.clientY;
//     };
//     document.addEventListener('mousemove', handleMouseMove);

//     const animate = () => {
//       setTooltipPos((prev) => ({
//         x: prev.x + (targetPos.x - prev.x) * 0.2,
//         y: prev.y + (targetPos.y - prev.y) * 0.2,
//       }));
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => document.removeEventListener('mousemove', handleMouseMove);
//   }, [targetPos]);

//   return (
//     <>
//       <style jsx>{`
//         @keyframes rotateText {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         .circle-rotator {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           animation: rotateText 8s linear infinite;
//         }
        
//         .char-wrapper {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           transform-origin: 0 0;
//         }
//       `}</style>
      
//       {children({ setHoverText })}
      
//       {hoverText && (
//         <div
//           className="circle-tooltip"
//           style={{
//             position: 'fixed',
//             left: tooltipPos.x,
//             top: tooltipPos.y,
//             width: '120px',
//             height: '120px',
//             transform: 'translate(-50%, -50%)',
//             pointerEvents: 'none',
//             borderRadius: '50%',
//             zIndex: 9999,
//             fontSize: '14px',
//             color: '#fff',
//           }}
//         >
//           <div className="circle-rotator">
//             {hoverText.split('').map((char, i) => {
//               const angle = (360 / hoverText.length) * i;
//               return (
//                 <span
//                   key={i}
//                   className="char-wrapper"
//                   style={{
//                     transform: `rotate(${angle}deg) translateX(50px) rotate(-${angle}deg)`,
//                   }}
//                 >
//                   {char}
//                 </span>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import { useState, useEffect, useRef } from 'react';

// export default function HeroIconCursor({ children }) {
//   const [hoverText, setHoverText] = useState('');
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
//   const targetPos = useState({ x: 0, y: 0 })[0];
//   const styleElRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       targetPos.x = e.clientX;
//       targetPos.y = e.clientY;
//     };
//     document.addEventListener('mousemove', handleMouseMove);

//     const animate = () => {
//       setTooltipPos((prev) => ({
//         x: prev.x + (targetPos.x - prev.x) * 0.2,
//         y: prev.y + (targetPos.y - prev.y) * 0.2,
//       }));
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => document.removeEventListener('mousemove', handleMouseMove);
//   }, [targetPos]);

//   // Inject/remove global CSS to hide cursor ONLY while hoverText is visible
//   useEffect(() => {
//     if (typeof document === 'undefined') return;

//     if (hoverText) {
//       if (!styleElRef.current) {
//         const style = document.createElement('style');
//         style.setAttribute('data-hero-cursor', 'true');
//         style.innerHTML = `
//           /* hide cursor everywhere while tooltip is showing */
//         //   *, *::before, *::after {
//         //     cursor: none !important;
//         //   }
//           /* allow normal cursor on touch/coarse pointers */
//           @media (pointer: coarse) {
//             *, *::before, *::after { cursor: auto !important; }
//           }
//         `;
//         document.head.appendChild(style);
//         styleElRef.current = style;
//       }
//     } else {
//       if (styleElRef.current) {
//         document.head.removeChild(styleElRef.current);
//         styleElRef.current = null;
//       }
//     }
//   }, [hoverText]);

//   // Ensure cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (styleElRef.current && typeof document !== 'undefined') {
//         document.head.removeChild(styleElRef.current);
//         styleElRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .circle-tooltip {
//           position: fixed;
//           transform: translate(0%, -50%);
//           pointer-events: none; /* allows clicking through */
//           z-index: 9999;
//           font-size: 14px;
//           font-weight: bold;
//           color: #fff;
//           padding: 6px 12px;
//           background: rgba(0, 0, 0, 0.7);
//           border-radius: 8px;
//           white-space: nowrap;
//         }
//       `}</style>

//       {children({ setHoverText })}

//       {hoverText && (
//         <div
//           className="circle-tooltip"
//           style={{
//             left: tooltipPos.x,
//             top: tooltipPos.y + -25, // offset a bit below cursor
//           }}
//         >
//           {hoverText}
//         </div>
//       )}
//     </>
//   );
// }



// import { useState, useEffect } from "react";

// export default function HeroIconCursor({ children }) {
//   const [showImage, setShowImage] = useState(false);
//   const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
//   const targetPos = useState({ x: 0, y: 0 })[0];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       targetPos.x = e.clientX;
//       targetPos.y = e.clientY;
//     };
//     document.addEventListener("mousemove", handleMouseMove);

//     const animate = () => {
//       setTooltipPos((prev) => ({
//         x: prev.x + (targetPos.x - prev.x) * 0.2,
//         y: prev.y + (targetPos.y - prev.y) * 0.2,
//       }));
//       requestAnimationFrame(animate);
//     };
//     animate();

//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, [targetPos]);

//   return (
//     <>
//       {children({ setShowImage })}

//       {showImage && (
//         <div
//           className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
//           style={{
//             left: tooltipPos.x,
//             top: tooltipPos.y,
//           }}
//         >
//           <style jsx>{`
//             @keyframes slow-spin {
//                 from { transform: rotate(0deg); }
//                 to { transform: rotate(360deg); }
//             }
//             .slow-spin {
//                 animation: slow-spin 10s linear infinite;
//             }
//             `}</style>

//             <img
//             src="./hover-image-media.png"
//             alt="cursor hover"
//             className="object-contain w-[150px] h-[150px] slow-spin"
//             />

//         </div>
        
//       )}
//     </>
//   );
// }


import { useState, useEffect } from "react";

export default function HeroIconCursor({ children, hoverImage }) {
  const [showImage, setShowImage] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const targetPos = useState({ x: 0, y: 0 })[0];

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setTooltipPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.2,
        y: prev.y + (targetPos.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };
    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [targetPos]);

  return (
    <>
      {children({ setShowImage })}

      {showImage && hoverImage && (
        <div
          className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
          }}
        >
          <style jsx>{`
            @keyframes slow-spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .slow-spin {
              animation: slow-spin 10s linear infinite;
            }
          `}</style>

          <img
            src={hoverImage}
            alt="cursor hover"
            className="object-contain w-[150px] h-[150px] slow-spin hover-image opacity-0"
            style={{ opacity: showImage === true ? 1 : 0 , transition: 'opacity 1s ease-in-out', filter: 'drop-shadow(0 4px 10px rgba(65, 121, 225, 0.77))' }}
          />
        </div>
      )}
    </>
  );
}
