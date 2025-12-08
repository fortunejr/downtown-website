import React, { useEffect, useState } from "react";
import { hero, heroimg } from "../../imports"; 

const Herosection = () => {
  const words = ["calories", "breakfast", "lunch", "dinner"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ⏳ Typewriter Logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (letterIndex < currentWord.length) {
          setText(currentWord.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 800);
        }
      } else {
        if (letterIndex > 0) {
          setText(currentWord.substring(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
        } else {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [letterIndex, deleting, wordIndex]);

  return (
    <section className="flex flex-col items-center pt-10 pb-4 text-center w-full overflow-hidden tracking-tight">

      {/* --------- TITLE TEXT --------- */}
      <div className="w-[95%] mb-4 md:w-[45%]">
        <img
          src={hero}
          alt="Turn chat to"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* --------- TYPEWRITER TEXT --------- */}
      <div className="w-[95%] mb-6 md:w-[45%]" style={{ minHeight: "80px" }}>
        <h1
          className="font-bold text-[#FC4C01] leading-none"
          style={{ fontSize: "clamp(4.0rem, 15vw, 7rem)" }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </h1>
      </div>

      {/* --------- HERO IMAGE --------- */}
      <div className="w-[95%] mb-4 md:w-[45%]">
        <img
          src={heroimg}
          alt="hero preview"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* --------- SCROLLING TEXT --------- */}
      <div className="relative w-[100%] overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
            display: inline-block;
          }
        `}</style>

        <p className="whitespace-nowrap text-gray-500 text-xl animate-marquee">
          order in seconds, on Simple, fast and reliable. order in seconds, on Simple, fast and reliable. order in seconds, on Simple, fast and reliable.
        </p>
      </div>
    </section>
  );
};

export default Herosection;
