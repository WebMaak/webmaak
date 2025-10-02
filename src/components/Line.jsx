import React from "react";

const lineStyle = {
  width: "100%",
  height: "1px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  position: "relative",
  overflow: "hidden",
};

const linesWrapperStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100vw",
  justifyContent: "space-evenly",
  pointerEvents: "none",
  zIndex: 1,
};

const Line = () => {
  return (
    <div style={linesWrapperStyle}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={lineStyle}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-20%",
              transform: "translateY(-50%)",
              width: "20%",
              height: "100%",
              background: "linear-gradient(to right, rgba(255,255,255,0) 0%, #1b1a1a 80%, #009fb7 100%)",
              animation: `move 6s infinite cubic-bezier(0.33, 1, 0.68, 1)`,
              animationDelay: `${i === 0 ? 1.4 : i === 1 ? 0 : 2}s`,
            }}
          />
        </div>
      ))}

      {/* keyframes defined once */}
      <style>
        {`
          @keyframes move {
            0% { left: -20%; }
            100% { left: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default Line;
