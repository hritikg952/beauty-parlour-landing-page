import React from "react";
import "./card-section.css";
import ServiceImage from "../../asset/services_image.jpg";
import ProductImage from "../../asset/product_image.jpg";
import GalleryImage from "../../asset/blog_image.jpg";
function CardSection() {
  const data = [
    {
      title: "SERVICES",
      text:
        "We offer a full range of salon treatments and styling services provided by a team of professional stylists, all in a clean air environment.",
      imgUrl: ServiceImage,
    },
    {
      title: "PRODUCTS",
      text:
        "From cost-effective, recyclable packaging to naturally harvested ingredients, we are proud to provide our guests with the most health-conscious choices in professional hair care products.",
      imgUrl: ProductImage,
    },
    {
      title: "GALLERY",
      text:
        "See our talented team's handiwork and hair inspiration in our unique photo gallery.",
      imgUrl: GalleryImage,
    },
  ];
  return (
    <div className="card-section-container">
      {data.map((d, index) => {
        return (
          <div className="card-container">
            <img src={d.imgUrl} alt="" />
            <div>
              <h1>{d.title}</h1>
              <p>{d.text}</p>
              <button className="globalbutton">Learn More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSection;
