import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Card from "./Card";
import Mbdata from "./Mbdata";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Managingbody() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Managing Body</h1>
      <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
export default Managingbody
