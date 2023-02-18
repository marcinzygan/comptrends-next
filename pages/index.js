import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS

import SideNavbar from "../components/SideNavbar/SideNavbar.js";
import HeroSection from "../components/HeroSection/HeroSection.js";
import AboutSection from "../components/AboutSection/AboutSection.js";
import OfferSection from "../components/OfferSection/OfferSection.js";
import ContactSection from "../components/ContactSection/ContactSection.js";
import Footer from "../components/Footer/Footer.js";

// STATE Actions
import { checkScreenSize } from "../State/checkScreenSizeSlice";

export default function Home() {
  const dispatch = useDispatch();
  // Check screen size on page load
  useEffect(() => {
    dispatch(checkScreenSize());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Comptrends Solutions</title>
        <meta name="description" content="Dostarczamy dane dla firm." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SideNavbar />
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <ContactSection />
    </>
  );
}
