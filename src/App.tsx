import React from "react";
import Navbar from "./components/Navbar";
import SectionTwo from "./components/SectionTwo";
import SectionOne from "./components/SectionOne";
import ShowcatagoriesSectiom from "./components/ShowcatagoriesSection"
import TrendingCampaigns from "./components/TrendingCampaigns"
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Start from "./footer/Start";
import Footer from "./footer/Footer";
import ArrowButton from "./components/ArrowButton";
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <ShowcatagoriesSectiom />
      <TrendingCampaigns />
      <Card1 />
      <Card2 />
      <Start />
      <Footer />
      <ArrowButton />
    </div>
  );
};

export default App;

