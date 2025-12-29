import React from "react";
import { CTA3img, whatsappIcon } from "../../imports";

const WhatsAppOrderSection3 = () => {
  const whatsappNumber = "2349023168568";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const [isVisible, setIsVisible] = React.useState(false);
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#DEE9FF] py-12">
      <div className="w-full px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE: Text Content - pushed to left */}
        <div className="w-full md:w-[45%] flex flex-col gap-5 pr-8 md:pr-8">
          <h2 className="font-codec-heavy text-[#083999] text-4xl md:text-6xl max-w-xl lg:text-[64px] leading-[0.95]">
            Payment made easy
          </h2>

          <p className="text-[#083999] font-montserrat font-normal text-base md:text-xl leading-relaxed max-w-sm">
            With Downtown, powered by Flutterwave, one-time payments are secure,
            seamless, and instant.
          </p>

          {/* Order Now Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#083999] text-white text-base md:text-lg px-6 py-3 rounded-lg font-semibold hover:bg-[#152D4D] transition-colors shadow-md w-fit mt-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            Order Now!
          </a>
        </div>

        {/* RIGHT SIDE: Phone Image - pushed to right */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            ref={imgRef}
            src={CTA3img}
            alt="Downtown Payment Screen"
            className={`w-full max-w-[450px] md:max-w-[600px] h-auto transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderSection3;
