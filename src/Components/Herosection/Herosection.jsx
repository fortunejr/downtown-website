import React, { useEffect, useState } from "react";
import { heroimg } from "../../imports"; // Assuming heroimg is the phone mockup
import { ssdowntown1 } from "../../imports";

const Herosection = () => {
  const words = ["calories", "breakfast", "lunch", "dinner"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ⏳ Typewriter Logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = deleting ? 60 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (letterIndex < currentWord.length) {
          setText(currentWord.substring(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1200);
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
    <section className="w-full overflow-hidden bg-white">
      {/* --------- MAIN CONTENT CONTAINER --------- */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between pt-12 md:pt-20 font-codec-heavy">
        {/* LEFT SIDE: TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <h1
            className="font-black leading-[0.9] text-black"
            style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
          >
            Turn
            <br />
            <span className="text-[#B2B2B2]">chat</span>
            <br />
            to <br />
            <span className="text-[#FC4C01]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        {/* RIGHT SIDE: HERO IMAGE */}
        <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
          <img
            src={ssdowntown1}
            alt="Downtown App Interface"
            className="w-full max-w-[450px] h-auto object-contain"
          />
        </div>
      </div>

      {/* --------- CONTINUOUS MARQUEE --------- */}
      <div className="relative flex overflow-x-hidden border-t border-gray-100 py-4 bg-white">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: 200%; /* Double width to accommodate cloned text */
            animation: marquee 20s linear infinite;
          }
        `}</style>

        <div className="animate-marquee-infinite whitespace-nowrap">
          {/* We repeat the content twice for the seamless loop effect */}
          {[1, 2].map((i) => (
            <span
              key={i}
              className="text-gray-400 text-xl md:text-3xl font-light px-4"
            >
              Order in seconds, Simple, fast and reliable. Order in seconds,
              Simple, fast and reliable. Order in seconds, Simple, fast and
              reliable.
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
