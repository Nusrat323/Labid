import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function GiftBoxSection({ opened, setOpened }) {
  const balloons = Array.from({ length: 4 });
  const confetti = Array.from({ length: 28 });

  const [balloonCycle, setBalloonCycle] = useState(0);

  const balloonSetup = [
    { left: "10%", bottom: "-140px", distance: "-110vh" },
    { left: "35%", bottom: "-180px", distance: "-125vh" },
    { left: "58%", bottom: "-100px", distance: "-115vh" },
    { left: "80%", bottom: "-180px", distance: "-130vh" },
  ];

  
  const balloonColors = ["#fb7185", "#facc15", "#60a5fa", "#FF0000"];

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [opened]);

  
  useEffect(() => {
    if (!opened) return;
    const interval = setInterval(() => {
      setBalloonCycle((prev) => prev + 1);
    }, 10000); 
    return () => clearInterval(interval);
  }, [opened]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center md:justify-start md:pt-40 bg-gradient-to-b from-white via-rose-50 to-pink-100 overflow-hidden text-gray-800">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-pink-200/30 rounded-full blur-3xl" />

      {/* 🎈 Balloons */}
      {opened &&
        balloons.map((_, i) => (
          <svg
            key={`${balloonCycle}-${i}`}
            className="absolute animate-balloon"
            style={{
              left: balloonSetup[i].left,
              bottom: balloonSetup[i].bottom,
              "--balloon-distance": balloonSetup[i].distance,
              width: "80px",
              height: "120px",
            }}
            viewBox="0 0 64 96"
          >
            {/* Balloon body */}
            <ellipse cx="32" cy="40" rx="28" ry="40" fill={balloonColors[i]} />
            {/* Balloon shine */}
            <ellipse cx="24" cy="30" rx="8" ry="14" fill="rgba(255,255,255,0.35)" />
            {/* Balloon string */}
            <line x1="32" y1="80" x2="32" y2="96" stroke="#555" strokeWidth="2" />
          </svg>
        ))}

      {/* 🎉 Confetti */}
      {opened &&
        confetti.map((_, i) => (
          <span
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              animationDuration: `${5 + Math.random() * 4}s`,
              backgroundColor: ["#fb7185", "#facc15", "#60a5fa", "#facc15"][
                Math.floor(Math.random() * 4)
              ],
            }}
          />
        ))}

      {/* 🎂 Text */}
      {opened && (
        <div
          className="absolute top-24 text-center animate-textUp z-10"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-rose-600">
            Happy Birthday
          </h1>
          <p className="mt-3 text-3xl text-pink-500">My Love ❤️</p>
        </div>
      )}

      {/* 🎁 Gift box */}
      <div
        onClick={() => !opened && setOpened(true)}
        className="cursor-pointer select-none hover-scale z-10"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] drop-shadow-xl"
        >
          <g
            className={`origin-bottom transition-transform duration-700 ${
              opened ? "-rotate-30" : ""
            }`}
            transform="translate(100 90)"
          >
            <rect x="-70" y="-30" width="140" height="30" rx="8" fill="#f43f5e" />
            <rect x="-6" y="-30" width="12" height="30" fill="#fde68a" />
            <g transform="translate(0 -32)">
              <path d="M-22 8 C-55 -8 -55 30 -22 20 Z" fill="#fb7185" />
              <path d="M22 8 C55 -8 55 30 22 20 Z" fill="#fb7185" />
              <circle cx="0" cy="14" r="6" fill="#f43f5e" />
            </g>
          </g>
          <rect x="30" y="90" width="140" height="105" rx="14" fill="#fb7185" />
          <rect x="94" y="90" width="12" height="105" fill="#fde68a" />
        </svg>
      </div>
    </section>
  );
}
