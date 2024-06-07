import React from "react";
import styled from "styled-components";

const Section5 = () => {
  return (
    <Container>
      <button
        style={{
          height: "50px",
          width: "140px",
          border: "2px solid #9D9D9D",
          backgroundColor: "#F1EBFF",
          color: "#4F87FF",
          borderRadius: "45px",
          marginTop: "40px",
          fontSize: "22px",
        }}
      >
        Feedback
      </button>
    </Container>
  );
};

export default Section5;

const Container = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;
`;
