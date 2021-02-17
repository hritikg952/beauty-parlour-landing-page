import React from "react";
import "./App.css";
import CardSection from "./component/card-section/CardSection";
import Header from "./component/header/Header";
import ImageSection from "./component/image-section/ImageSection";
import MainSection from "./component/main-section/MainSection";
import MapSection from "./component/map-section/MapSection";
import PhylosophySection from "./component/phylosophy-section/PhylosophySection";
import Footer from "./component/footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <PhylosophySection />
      <ImageSection />
      <CardSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
