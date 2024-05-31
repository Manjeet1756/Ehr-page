import React from "react";
import styled from "styled-components";
import Cards from "./Section5Cards";
const Section5 = () => {
  return (
    <Container>
      <div className="box1">
        <button
          style={{
            height: "50px",
            width: "140px",
            border: "2px solid #9D9D9D",
            backgroundColor: "#F1EBFF",
            color: "#4F87FF",
            borderRadius: "45px",
            marginTop: "40px",
            fontSize:"22px"
          }}
        >
          Feedback
        </button>
      </div>

      <div className="box2">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </Container>
  );
};

export default Section5;

const Container = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #E9EDF0;

  .box1 {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box2 {
    height: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
