import React from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const Terms = () => {
  return (
    <div className="bg-[#ffffff]">
      <Nav />

      {/* Terms & Conditions Section */}
      <section className="max-w-5xl mx-auto px-6 py-2 ">
        <h1 className="text-[32px] font-codec-heavy md:text-5xl max-w-sm md:max-w-xl mb-4 ">
          Terms & Conditions for Downtown by Heychat International Limited
          Service Bot
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Effective Date: 6/9/2025
        </p>

        <p className="text-base md:text-lg text-gray-700 mb-6">
          Welcome to Downtown! Before you start ordering, let's get on the same
          page about how this whole thing works.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-codec-regular mb-2">
          The Agreement (But Less Boring)
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Downtown is a chatbot service operated by Heychat International
          Limited.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-2">
          Who Are We?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Downtown is owned and operated by HeyChat International Limited. We're
          the ones making sure your campus food game stays strong through our
          WhatsApp chatbot.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          Who Can Use Downtown?
        </h2>
        <div className=" text-gray-700 mb-4">
          <p className=" text-xl font-medium">You need to:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>Be 13 or older</li>
            <li>
              Be a student or have access to a Nigerian private university
              campus
            </li>
            <li>Have a valid WhatsApp account</li>
            <li>Provide accurate info (fake details = cancelled orders)</li>
            <li>Actually pay for what you order</li>
          </ul>
        </div>
        <div className=" text-gray-700 mb-6">
          <p className=" text-xl font-medium">You can't use downtown if:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>You've been banned before (we remember)</li>
            <li>You're trying to scam us or vendors</li>
            <li>You're violating any laws</li>
          </ul>
        </div>
        {/* section 2 */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          How Downtown Works
        </h2>
        <div className=" text-gray-700 mb-4">
          <p className=" text-xl font-medium">The Deal:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>You message our WhatsApp bot</li>
            <li>Browse the menu and place your order</li>
            <li>Pay through our secure platform</li>
            <li>Food gets delivered to your campus location</li>
            <li>You eat and (hopefully) love it</li>
          </ul>
        </div>
        <p className="mb-8">
          Important: We connect you with food vendors, but we're not the
          restaurant. Think of us as the middleman making campus food delivery
          actually work.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          Your Responsibilites
        </h2>
        <div className=" text-gray-700 mb-4">
          <p className=" text-xl font-medium">Do:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>Provide accurate delivery info (we can't read minds)</li>
            <li>Be available when your food arrives</li>
            <li>Pay on time</li>
            <li>Treat delivery people with respect</li>
            <li>Report issues quickly if something's wrong</li>
          </ul>
        </div>
        <div className=" text-gray-700 mb-8">
          <p className=" text-xl font-medium">Don't:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>Share your account with random people</li>
            <li>Place fake orders (seriously, why would you?)</li>
            <li>Harass our bot, vendors, or delivery people</li>
            <li>Try to hack or break the platform</li>
            <li>Use Downtown for anything illegal</li>
            <li>Order food you're not gonna pay for</li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          Payment and refunds
        </h2>
        <div className=" text-gray-700 mb-4">
          <p className=" text-xl font-medium">Payments:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>All prices are in Nigerian Naira (NGN)</li>
            <li>Pay through our approved payment methods</li>
            <li>Prices may vary by vendor and include delivery fees</li>
            <li>Payment is due when you place the order</li>
          </ul>
        </div>
        <div className=" text-gray-700 mb-8">
          <p className=" text-xl font-medium">Refunds:</p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>
              If your order is cancelled within 2 minutes after payment, you get
              a full refund
            </li>
            <li>
              If there's a legit issue with your food, hit us up ASAP, we'll
              sort it out
            </li>
            <li>
              Changed your mind 2 minutes after ordering? Sorry, no refunds
              (vendors already started cooking)
            </li>
            <li>Refunds typically process within 5 minutes</li>
          </ul>
        </div>
        {/* food quality and safety */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          Food Quality And Safety
        </h2>
        <div className=" text-gray-700 mb-8">
          <p className=" text-base font-normal">
            Real talk: We don't prepare the food. Vendors do. We connect you
            with them, but they're responsible for:
          </p>
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>Food quality and safety</li>
            <li>Accurate descriptions</li>
            <li>Proper packaging</li>
            <li>Meeting health standards</li>
          </ul>
        </div>

        {/* delivery */}
        <h2 className="text-2xl font-semibold font-codec-regular text-gray-900 mb-4">
          Delivery
        </h2>
        <div className=" text-gray-700 mb-8">
          <ul className=" text-base md:text-lg list-disc pl-5 space-y-1">
            <li>
              <strong>Estimated Times:</strong> We give you estimates, but
              Nigerian traffic is unpredictable. Delivery times aren't
              guaranteed.
            </li>
            <li>
              <strong>Location:</strong> You need to provide a valid campus
              location. If the driver can't find you because of wrong info,
              that's on you.
            </li>
            <li>
              <strong>Missed Deliveries:</strong> If you're not available and
              miss your delivery, we're not responsible. No refunds for
              no-shows.
            </li>
          </ul>
        </div>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-4">
          Intellectual Property
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Everything on Downtown—the bot, design, name, logo—belongs to Heychat
          International Limited. Don't copy, steal, or try to recreate it.
          That's not cool and it's illegal.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-4">
          Limitation of Liability
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          To the maximum extent permitted by Nigerian law, Heychat International
          Limited isn't liable for any indirect, incidental, or consequential
          damages from using Downtown.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-4">
          Updates to Terms
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          These Terms may change as we improve our services. We’ll notify users
          via WhatsApp or on our website.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold text-gray-900 font-codec-regular mb-4">
          Contact
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          Email:{" "}
          <a href="mailto:askheychat@downtown.ng">askheychat@downtown.ng</a>
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          Phone: <a href="tel:+2349028283115">+2349028283115</a>
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-10">
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
  );
};

export default Terms;
