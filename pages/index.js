import Head from "next/head";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS
import Navbar from "../components/Navbar/Navbar.js";
import SideNavbar from "../components/SideNavbar/SideNavbar.js";
import HeroSection from "../components/HeroSection/HeroSection.js";
// STATE
import { checkScreenSize } from "../State/hideAnimationSlice";

export default function Home() {
  const dispatch = useDispatch();
  // Check screen size on page load
  useEffect(() => {
    dispatch(checkScreenSize());
  }, [dispatch]);
  return (
    <div className="layout">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SideNavbar />
      <HeroSection />
    </div>
  );
}
