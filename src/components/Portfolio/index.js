import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.js";
import {
  PortfolioSection,
  PortfolioItem,
  PortfolioTitle,
  PortfolioList,
  PortfolioTitleSpan,
  ImageRapper,
  Overlay,
  OverlaySpan,
  Image,
} from "./style.js";
const Portfolio = () => {
  const [images , setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then(res => {setImages(res.data.portfolio );
    });
  }, []);
  const PortfolioImages = images.map((ImageItem) => {
    return (
      <ImageRapper key={ImageItem.id}>
        <Image src={ImageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageRapper>
    );
  });
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">{PortfolioImages}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
