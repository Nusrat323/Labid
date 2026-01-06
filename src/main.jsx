import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import GiftBoxSection from "./components/GiftBoxSection";
import CakeSection from "./components/CakeSection";

import "./index.css";
import Birthday31Section from "./components/Birthday31Section";

function Main() {
  const [opened, setOpened] = useState(false);
  const [showCakeButton, setShowCakeButton] = useState(false);
  const [showCakeSection, setShowCakeSection] = useState(false);
  const [showBirthday31, setShowBirthday31] = useState(false);
  const [showLetsGoButton, setShowLetsGoButton] = useState(false); 

  
  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => setShowCakeButton(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  const handleCakeClick = () => {
    setShowCakeSection(true);
    setShowCakeButton(false);

    
    const letsGoTimer = setTimeout(() => setShowLetsGoButton(true), 3000);
    return () => clearTimeout(letsGoTimer);
  };

  const handleNextBirthday31 = () => {
    setShowBirthday31(true);
    setShowCakeSection(false);
    setShowLetsGoButton(false); 
  };

  return (
    <>
      {/* Gift Box Section */}
      {!showCakeSection && !showBirthday31 && (
        <GiftBoxSection opened={opened} setOpened={setOpened} />
      )}

      
      {opened && showCakeButton && !showCakeSection && !showBirthday31 && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={handleCakeClick}
            className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg animate-bounce hover:scale-105 transition-transform"
          >
            Click Here 
          </button>
        </div>
      )}

      
      {showCakeSection && !showBirthday31 && (
        <>
          <CakeSection />

          
          {showLetsGoButton && (
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
              <button
                onClick={handleNextBirthday31}
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:scale-105 transition-transform animate-slideIn"
              >
                Let's Go
              </button>
            </div>
          )}
        </>
      )}

      
      {showBirthday31 && <Birthday31Section />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


