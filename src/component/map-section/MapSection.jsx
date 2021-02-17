import React from "react";
import "./map-section.css";
import GoogleMapReact from "google-map-react";
const MapIcon = ({ text }) => {
  return (
    <div
      style={{
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        textAlign: "center",
        backgroundColor: "#bb3e37",
        color: "#fff",
        border: "black solid 1px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p style={{fontSize: "1.7rem"}}>{text}</p>
    </div>
  );
};
function MapSection() {
  return (
    <div className="map-section-container">
      <GoogleMapReact
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      >
        <MapIcon lat={59.95} lng={30.33} text="B" />
      </GoogleMapReact>
    </div>
  );
}

export default MapSection;
