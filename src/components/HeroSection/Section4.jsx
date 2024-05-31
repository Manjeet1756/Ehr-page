import React from "react";
import styled from "styled-components";
const Section4 = () => {
  return (
    <Container>
      <div className="box1">
        <button
          style={{
            height: "50px",
            width: "200px",
            border: "2px solid #9D9D9D",
            backgroundColor: "#F1EBFF",
            color: "#4F87FF",
            borderRadius: "45px",
            fontSize:"22px"
          }}
        >
          The New Reality
        </button>
      </div>

      <h1>The Introduction </h1>

      <p>
        At e-HR Connect, we strive to streamline your HR experience. Our
        platform offers a comprehensive suite of tools designed to make managing
        your HR tasks easier and more efficient. From tracking employee
        attendance and managing payroll to facilitating communication and
        performance reviews, we have everything you need to keep your team
        running smoothly.
      </p>

      <div className="img-box">
        <img src="Rectangle 28.png" alt="img" />
      </div>
    </Container>
  );
};

export default Section4;

const Container = styled.div`
  height: 950px;
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 150px 0px 150px;
  background-color: #E9EDF0;

  .box1 {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }
  .img-box {
    height: 500px;
    width: 100%;

    img {
      height: 500px;
      width: 100%;
      object-fit: cover;
      border-radius: 45px;
    }
  }
`;
