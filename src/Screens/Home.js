import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import CarousalSlider from "../components/CrousalSlide/CarousalSlider";

function Home() {
  return (
    <div className="bg-dark text-light">
      <div>
        <Navbar />
      </div>
      <div>
        <CarousalSlider/>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
