import React from "react";
import { CTA2img, whatsappIcon } from "../../imports";

const WhatsAppOrderSection2 = () => {
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
    <div className="w-full bg-[#FBEFFF] py-12">
      <div className="w-full px-8 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT SIDE: Phone Image - pushed to left */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start mt-10 md:mt-0">
          <img
            ref={imgRef}
            src={CTA2img}
            alt="Downtown Delivery Options"
            className={`w-full max-w-[450px] md:max-w-[600px] h-auto transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          />
        </div>

        {/* RIGHT SIDE: Text Content - pushed to right */}
        <div className="w-full md:w-[45%] flex flex-col gap-5 text-right items-end md:pl-8">
          <h2 className="font-codec-heavy  text-[#630086] text-4xl md:text-6xl lg:text-[64px] leading-[0.95]">
            Delivered or grab it yourself
          </h2>

          <p className="text-[#630086] font-montserrat font-normal italic text-base md:text-xl leading-relaxed max-w-sm">
            delivery right to you for just ₦100, or quick and easy pickup for
            only ₦50. Affordable, flexible, and always convenient
          </p>

          {/* Try it Out Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#630086] text-white text-base md:text-lg px-6 py-3 rounded-lg font-semibold hover:bg-[#2D1155] transition-colors shadow-md w-fit mt-2"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            Try it Out!
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppOrderSection2;
