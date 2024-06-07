import React from "react";
import styled from "styled-components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Section5Cards from "./Section5Cards";
const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      <Section5 />
      <Carousel
        responsive={responsive}
        infinite={true}
        Style={{ backgroundColor: "#E9EDF0" }}
      >
        <div>
          <Section5Cards />
        </div>
        <div>
          <Section5Cards />
        </div>
        <div>
          <Section5Cards />
        </div>
        <div>
          <Section5Cards />
        </div>
      </Carousel>

      <Section6 />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;


`;
