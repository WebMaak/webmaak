// import React from "react";
// import "./Hamburger.css";

// interface HamburgerProps {
//   isOpen: boolean;
//   toggle: () => void;
// }

// const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle }) => {
//   return (
//     <button
//       onClick={toggle}
//       className={`hamburger-btn ${isOpen ? "is-active" : ""}`}
//       aria-label="Toggle Menu"
//     >
//       <div className="hamburger-icon">
//         <span />
//         <span />
//         <span />
//       </div>
//     </button>
//   );
// };

// export default Hamburger;

import React from "react";
import { ChartNoAxesGantt, X } from "lucide-react";
import "@/styles/navbar/Hamburger.css";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
  isShrunk: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggle, isShrunk }) => {
  return (
    <button
      onClick={toggle}
      className={`hamburger-btn ${isOpen ? "is-active" : ""} ${
        isShrunk ? "shrunk" : ""
      }`}
      aria-label="Toggle Menu"
    >
      <div className="hamburger-icon">
        {/* Menu icon */}
        <ChartNoAxesGantt
          className={`ham-icon ${isOpen ? "fade-out" : "fade-in"}`}
        />

        {/* Close icon */}
        <X className={`ham-icon ${isOpen ? "fade-in" : "fade-out"}`} />
      </div>
    </button>
  );
};

export default Hamburger;
