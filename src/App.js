import React, { useState, useEffect } from "react";

const DivRenderer = () => {
  const [divCount, setDivCount] = useState(0);
  const [showAllDivs, setShowAllDivs] = useState(false);

  useEffect(() => {
    let interval;
    if (divCount <= 9) {
      interval = setTimeout(() => {
        setDivCount((preCount) => preCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      {Array.from({ length: showAllDivs ? 10 : divCount }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "50px",
            height: "50px",
            background: "red",
            margin: "10px"
          }}
        ></div>
      ))}
    </div>
  );
};
export default DivRenderer;
