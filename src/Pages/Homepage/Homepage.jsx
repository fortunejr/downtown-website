import React from "react";
import Nav from "../../Components/Nav/Nav";
import Herosection from "../../Components/Herosection/Herosection";
import CTA from "../../Components/CTA/CTA";
import CTA2 from "../../Components/CTA2/CTA2";
import CTA3 from "../../Components/CTA3/CTA3";

import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import QRsection from "../../Components/QRsection/qr_section";

const Homepage = () => {
  return (
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
  );
};

export default Homepage;
