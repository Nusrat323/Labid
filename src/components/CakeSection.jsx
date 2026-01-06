import React, { useEffect, useState } from "react";
import cakeImage from "../assets/images/cake.png";
import candleImage from "../assets/images/candle.png";
import "../styles/cake.css";

export default function CakeSection() {
  const [showText, setShowText] = useState(false);
  const [showCandle, setShowCandle] = useState(false);

  useEffect(() => {
    const candleTimer = setTimeout(() => setShowCandle(true), 1000);
    const textTimer = setTimeout(() => setShowText(true), 2000);

    return () => {
      clearTimeout(candleTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const pennants = [...Array(8)];

  return (
    <div className="cake-section">
      {/* Background */}
      <div className="cake-bg"></div>

      {/* Curved Bunting */}
      <div className="bunting-container">
        {pennants.map((_, i) => (
          <div key={i} className={`pennant pennant-${i}`}></div>
        ))}
      </div>

      {/* Cake + Candle + Text */}
      <div className="cake-layout">
        <div className="cake-wrapper">
          <img
            src={cakeImage}
            alt="Birthday Cake"
            className="cake-img animate-drop"
          />
          {showCandle && (
            <img
              src={candleImage}
              alt="Candle"
              className="candle-img animate-drop-candle"
            />
          )}
        </div>

        {showText && (
          <div className="text-wrapper">
            <h2 className="cake-text animate-textUp">Your Birthday Cake</h2>
          </div>
        )}
      </div>
    </div>
  );
}






