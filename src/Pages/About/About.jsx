import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';
import { bells } from '../../imports';

const About = () => {
  return (
    <div className=" text-gray-800">
      <Nav />

      {/* Main About Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 leading-relaxed">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          About Heychat International Limited
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          Heychat International Limited was founded on March 26, 2025, at Bells University of Technology.
          Born out of a vision to simplify student life, we are a forward-thinking company dedicated to
          building solutions that make everyday essentials more accessible.
        </p>

        {/* Our Inspiration */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Inspiration</h2>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          Our flagship product, <strong>Downtown</strong>, was inspired by the iconic landmark at Bells University of
          Technology where students gather to eat, socialize, and connect. This vibrant hub of student life sparked
          the idea to create a digital space that mirrors the same convenience and community spirit.
        </p>

        {/* What We Do */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Do</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Downtown is more than just an app—it's a lifestyle tool designed for students who value simplicity,
          speed, and accessibility. With Downtown, students can:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-8 space-y-1">
          <li>🍔 Order food from their favorite spots with ease</li>
          <li>🖨️ Access printing services without hassle</li>
          <li>🛒 Shop for basic products right from their phones</li>
        </ul>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          We are committed to bridging the gap between students and the services they need most, ensuring
          that convenience is always just a chat away.
        </p>

        {/* Our Commitment */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h2>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          At Heychat International Limited, we believe that technology should make life easier, not more complicated.
          That's why we are dedicated to meeting ends with simplicity while delivering solutions that are intuitive,
          reliable, and tailored to the unique needs of students.
        </p>

        {/* Our Vision */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h2>
        <p className="text-sm md:text-base text-gray-700 mb-10">
          To become the go-to platform for students across campuses, redefining how they access everyday essentials
          while fostering a stronger sense of community.
        </p>

        {/* Bells Image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <img
            src={bells}
            alt="Bells University"
            className="w-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
