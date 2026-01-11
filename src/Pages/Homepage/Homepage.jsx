import React from "react";
import Nav from "../../Components/Nav/Nav";
import Herosection from "../../Components/Herosection/Herosection";
import CTA from "../../Components/CTA/CTA";
import CTA2 from "../../Components/CTA2/CTA2";
import CTA3 from "../../Components/CTA3/CTA3";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import QRsection from "../../Components/QRsection/qr_section";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Downtown by HeyChat",
    image: "https://downtown.ng/logo.png", // Replace with actual logo URL
    address: {
      "@type": "PostalAddress",
      streetAddress: "Km 8 Idiroko Road, Bells University",
      addressLocality: "Ota",
      addressRegion: "Ogun State",
      addressCountry: "NG",
    },
    servesCuisine: "Fast Food, Student Meals",
    url: "https://downtown.ng",
  };
  return (
    <>
      <Helmet>
        <title>Downtown - WhatsApp Food Delivery at Bells University Ota</title>
        <meta
          name="description"
          content="Order delicious meals via WhatsApp from Downtown food court. Fast delivery to Bells University."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href="https://downtown.ng/" />
      </Helmet>
      <div>
        <Nav />
        <Herosection />
        <CTA />
        <CTA2 />
        <CTA3 />
        <FAQ />
        <QRsection />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
