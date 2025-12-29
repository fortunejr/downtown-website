import React from "react";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import { bells } from "../../imports";

const About = () => {
  return (
    <div className=" text-gray-800">
      <Nav />

      {/* Main About Section */}
      <section className="max-w-7xl mx-auto px-6 py-2 mb-12 leading-relaxed">
        {/* Header */}
        <h1 className="text-[32px] font-codec-heavy md:text-5xl font-bold text-gray-900 mb-4">
          About Downtown
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold font-codec-regular text-gray-900 mb-4">
          Bringing Campus Dining to Your Fingertips
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          Downtown is a WhatsApp-based food delivery service designed
          specifically for Nigerian university students. Born from a deep
          understanding of campus life, we're making it easier than ever to get
          delicious meals delivered right to your doorstep.
        </p>

        {/* Our Inspiration */}
        <h2 className="text-2xl md:text-4xl font-semibold font-codec-regular text-gray-900 mb-2">
          Our Story
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          Downtown is owned and operated by HeyChat International Limited
          (HeyChat), a company founded at Bells University of Technology with a
          simple goal: to solve real problems facing students in private
          universities across Nigeria. We started by asking ourselves, "What do
          students actually need?" The answer was clear, convenient access to
          food and seamless payment solutions that work within the campus
          ecosystem.
        </p>

        {/* What We Do */}
        <h2 className="text-2xl md:text-4xl font-semibold font-codec-regular text-gray-900 mb-4">
          What We Do
        </h2>
        <div className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          <p className="mb-2">
            Downtown is a WhatsApp chatbot-based application that streamlines
            the entire food ordering experience for university students. Through
            a simple chat interface on a platform you already use daily, you
            can:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Browse available meals from campus and nearby vendors</li>
            <li>Place orders quickly without downloading another app</li>
            <li>Make secure payments directly through the platform</li>
            <li>Track your delivery in real-time</li>
            <li>Get your food delivered straight to your location on campus</li>
          </ul>
        </div>

        {/* why Whatsapp? */}
        <h2 className="text-2xl md:text-4xl font-semibold font-codec-regular text-gray-900 mb-4">
          Why Whatsapp?
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          We chose WhatsApp because it's already on every student's phone. No
          app downloads, no learning curve, no storage issues, just open
          WhatsApp and start ordering. It's food delivery made simple.
        </p>

        {/* Our Commitment */}
        <h2 className="text-2xl md:text-4xl font-semibold font-codec-regular text-gray-900 mb-4">
          Our Commitment
        </h2>
        <div className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          <p className="mb-2">At Downtown, we're committed to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Convenience - Making food ordering as easy as sending a message
            </li>
            <li>
              Reliability - Ensuring your meals arrive on time, every time
            </li>
            <li>Affordability - Keeping prices student-friendly</li>
            <li>
              Security - Protecting your payment information with trusted,
              secure methods
            </li>
            <li>
              Community - Supporting local vendors while serving student needs
            </li>
          </ul>
        </div>

        {/* Our Vision */}
        <h2 className="text-2xl md:text-4xl font-semibold font-codec-regular text-gray-900 mb-4">
          Looking Ahead
        </h2>
        <p className="text-[16px] md:text-[18px] text-gray-700 mb-10">
          While we're focused on perfecting food delivery services today, our
          vision extends beyond just meals. We're constantly listening to
          student feedback and exploring new ways Downtown can make campus life
          better for Nigerian university students.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
