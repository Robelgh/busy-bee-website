import React, { useState, useEffect } from "react";
import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { Features } from "./Features";
import { About } from "./About";
import { Team } from "./Team";
import {Testimonials} from './Testimonial';
import {Register} from './Register';
import { Contact } from "./Contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Register data={landingPageData.Register}/>
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

