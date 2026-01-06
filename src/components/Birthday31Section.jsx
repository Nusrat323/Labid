import React, { useEffect, useState } from "react";
import "../styles/birthday31.css";

import memory1 from "../assets/images/p1.jfif";
import memory2 from "../assets/images/p2.jfif";
import memory3 from "../assets/images/p3.jfif";
import memory4 from "../assets/images/p4.jfif";
import memory5 from "../assets/images/p5.jfif";
import memory6 from "../assets/images/p6.jfif";
import memory7 from "../assets/images/p7.jfif";
import memory8 from "../assets/images/p8.jfif";
import memory9 from "../assets/images/p9.jfif";
import memory10 from "../assets/images/p10.jfif";
import memory11 from "../assets/images/p11.jfif";
import memory12 from "../assets/images/p12.jfif";
import memory13 from "../assets/images/p13.jfif";
import memory14 from "../assets/images/p14.jfif";
import memory15 from "../assets/images/p15.jfif";
import memory16 from "../assets/images/p16.jfif";
import memory17 from "../assets/images/p17.jfif";
import memory18 from "../assets/images/p18.jfif";
import memory19 from "../assets/images/p19.jfif";
import memory20 from "../assets/images/p20.jfif";
import memory21 from "../assets/images/p21.jfif";
import memory22 from "../assets/images/p22.jfif";
import memory23 from "../assets/images/p23.jfif";
import memory24 from "../assets/images/p24.jfif";
import memory25 from "../assets/images/p25.jfif";
import memory26 from "../assets/images/p26.jfif";
import memory27 from "../assets/images/p27.jfif";
import memory28 from "../assets/images/p28.jfif";
import memory29 from "../assets/images/p29.jfif";

import memory30 from "../assets/images/p28.jfif";
import memory31 from "../assets/images/p29.jfif";

export default function Birthday31Section() {
  const [show31, setShow31] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRecapButton, setShowRecapButton] = useState(false);
  const [showMemories, setShowMemories] = useState(false);

  const allMemories = [
    memory1, memory2, memory3, memory4, memory5,
    memory6, memory7, memory8, memory9, memory10,
    memory11, memory12, memory13, memory14, memory15,
    memory16, memory17, memory18, memory19, memory20,
    memory21, memory22, memory23, memory24, memory25,
    memory26, memory27, memory28, memory29, memory30, memory31
  ];

  
  const leftMemories = allMemories.slice(0, 15);
  const rightMemories = allMemories.slice(15, 30); 

  useEffect(() => {
    setShow31(true);
    const timer = setTimeout(() => {
      setShowMessage(true);
      setShowRecapButton(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRecap = () => {
    setShow31(false);
    setShowMessage(false);
    setShowRecapButton(false);
    setShowMemories(true);
  };

  return (
    <div className="birthday31-section">
      <div className="birthday31-bg" />

      {show31 && <div className="birthday-number">32</div>}

      {showMessage && (
        <div className="birthday-message">
          I pray that all the years ahead are as beautiful as your past 32 years 
          <br />
          May Allah bless you, my love ❤️
        </div>
      )}

      {showRecapButton && (
        <button className="recap-button" onClick={handleRecap}>
          Memories 
        </button>
      )}

      {showMemories && (
        <>
          <div className="projector-flicker" />

          <div className="film-roll-container">
            {/* LEFT ROLL */}
            <div className="film-roll left-roll">
              {leftMemories.map((img, i) => (
                <div className="film-frame" key={`L-${i}`}>
                  <div className="perforation" />
                  <img src={img} alt="" />
                  <div className="perforation" />
                </div>
              ))}
            </div>

            {/* RIGHT ROLL */}
            <div className="film-roll right-roll">
              {rightMemories.map((img, i) => (
                <div className="film-frame" key={`R-${i}`}>
                  <div className="perforation" />
                  <img src={img} alt="" />
                  <div className="perforation" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

