import React, { useState, useEffect } from "react";
import { Navigation } from "./compenent/Navigation";
import { Header } from "./compenent/Header";
import { Features } from "./compenent/Features";
import { About } from "./compenent/About";
import { Services } from "./compenent/Services";
import { Testimonials } from "./compenent/Testimonial";
import { Team } from "./compenent/Team";
// import { Contact } from "./compenent/Contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
