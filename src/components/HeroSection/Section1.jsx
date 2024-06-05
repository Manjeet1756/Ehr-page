import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const Section1 = () => {
  return (
    <Container>
      <h1>
        Unleash the <strong style={{ color: "#9747FF" }}>power </strong> of your{" "}
        <br />
        people <strong style={{ color: "#9747FF" }}>
          with seamless
        </strong> HR <br /> automation.
      </h1>
      <p>
        empowering your team, simplifying <br /> compliance
      </p>
      <button
        style={{
          height: "80px",
          width: "350px",
          borderRadius: "100px",
          fontSize: "40px",
          color: "white",
          backgroundColor: "#9747FF",
          border: "none",
          position:"relative"
        }}
      >
        Get Started <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </Container>
  );
};

export default Section1;

const Container = styled.div`
  height: 1000px;
  width: 100%;
  
  background-color: #f1ebff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
 

  z-index: -1;
  h1 {
    font-size: 70px;
  }
  p {
    font-size: 40px;
  }


  button{

    
  overflow: hidden;
    
  span {
    z-index: 0;
  }

  &:after {
    background: #fff;
    content: "";
    height: 160px;
    left: -75px;
    width:30px;
    opacity: 0.4;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 0;
  }

  &:hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  }
`;
