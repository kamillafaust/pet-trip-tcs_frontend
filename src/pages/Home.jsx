import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { HotelContextProvider } from "../contextApi/useHotels";

export function Home() {
  return (
    <>
      <Header />
      <HotelContextProvider>
        <About />
        <Main />
      </HotelContextProvider>
      <Footer />
    </>
  );
}
