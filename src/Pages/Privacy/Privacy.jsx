import React from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Downtown</title>
        <meta
          name="description"
          content="Privacy Policy for Downtown.ng. How we handle your data and ensure secure WhatsApp ordering."
        />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://downtown.ng/privacy-policy" />
      </Helmet>
      <div className="bg-[#ffffff] text-gray-800">
        <Nav />

        {/* Privacy Policy Section */}
        <section className="max-w-5xl mx-auto px-6 py-2 mb-12 leading-relaxed">
          <h1 className="text-[32px] font-codec-heavy md:text-5xl max-w-xs md:max-w-xl text-gray-900 mb-4 leading-[0.9]">
            Privacy Policy for Downtown by Heychat International Limited
          </h1>
          <p className="text-base text-gray-">Effective Date: 5/9/2025</p>
          <p className="text-base text-gray-700 mb-10">
            Last Updated: 28/12/2025
          </p>
          <p className="text-xl text-gray-700 mb-6">
            Okay, let's talk privacy. We know nobody actually reads these, but
            this one's different, we promise. No cap.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Real Talk
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10">
            You're using Downtown to get food delivered on campus. We need some
            of your info to make that happen. Here's exactly what we do with it,
            in plain English (no legal mumbo jumbo).
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            What Info We're Collecting
          </h2>
          <div className=" text-gray-700 mb-2">
            <p className="mb-2 text-xl font-medium">The Obvious stuff:</p>
            <ol className=" text-[16px] md:text-[18px] list-decimal pl-5 space-y-1">
              <li>
                Your name and WhatsApp number (how else would we reach you?)
              </li>
              <li>Where you want your food delivered</li>
              <li>
                What you ordered (that jollof rice isn't gonna order itself)
              </li>
              <li>Payment details (we gotta get paid, you gotta eat)</li>
            </ol>
          </div>
          <div className="text-[16px] md:text-[18px] text-gray-700 mb-10">
            <p className="mb-2 text-xl font-medium">
              The Behind the scenes stuff:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Order history (so we can remember you love extra spice)</li>
              <li>Chat messages with our bot</li>
              <li>
                Basic tech info (device type, connection status, boring but
                necessary)
              </li>
            </ul>
          </div>

          {/* why we actually need this */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Why We Actually Need This
          </h2>
          <div className="text-base md:text-lg text-gray-700 mb-10">
            <p className="mb-2  font-medium">
              Look, we're not out here collecting data for fun. We need it to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Get your food to you hot and fresh</li>
              <li>Process payments without drama</li>
              <li>Remember your orders</li>
              <li>Hit you up with order updates</li>
              <li>Keep scammers out</li>
              <li>Stay legal (Nigerian laws, you know the vibes)</li>
            </ul>
          </div>

          {/* The whatsapp situation */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            The WhatsApp Situation
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10">
            Downtown lives on WhatsApp because that's where you already are.
            WhatsApp has their own privacy rules too, so check those out. But
            real quick: we only see messages you send to our bot. Your group
            chats and personal DMs? None of our business.
          </p>

          {/* Your Money, Your Security */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Your Money, Your Security
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10">
            We take payments seriously. Your card info goes through legit,
            encrypted payment processors, we don't even have your full account
            details.
          </p>

          {/* who gets to see your info */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Who Gets to See Your Info
          </h2>
          <div className="text-base md:text-lg text-gray-700 mb-1">
            <p className="mb-2 font-medium">
              We're not out here sharing your business with random people.
              Here's who gets what:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Food vendors - Need your name, order, and location (obviously)
              </li>
              <li>Payment people - Process your transactions securely</li>
              <li>Our tech team - Keep the platform running smooth</li>
              <li>
                The law - If Nigerian authorities require it or we're protecting
                our rights
              </li>
            </ul>
          </div>
          <p className="mb-10">
            What we DON'T do: Sell your data. Ever. That's weird and we're not
            about it.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Age Check
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-10">
            Gotta be 13+ to use Downtown. Under 13? Get your parent or guardian
            to order for you. We don't make the rules... wait, we do, but for
            good reasons.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            Email:{" "}
            <a href="mailto:askheychat@downtown.ng">askheychat@downtown.ng</a>
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Website:{" "}
            <a
              href="https://downtown.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.downtown.ng
            </a>
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
