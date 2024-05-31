import React from "react";
import styled from "styled-components";

const Section6 = () => {
  return (
    <Container>
      <div className="box1">
        <h1>
          Frequently asked <br />
          Questions
        </h1>
      </div>
      <div className="box2">
        <div className="boxes ">
          <h1>Question 1</h1>
        </div>
        <div className="boxes ">
          <h1>Question 2</h1>
        </div>
        <div className="boxes ">
          <h1>Question 3</h1>
        </div>
        <div className="boxes ">
          <h1>Question 4</h1>
        </div>
        <div className="boxes sub-box5 ">
          <h1>Question 5</h1>
        </div>
      </div>
    </Container>
  );
};

export default Section6;

const Container = styled.div`
  height: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px;
  gap: 60px;
  background-image: linear-gradient(to right, #f1ebff, #d0e5fe);

  .box1 {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 5px solid black;
    padding-right: 10px;
    h1 {
      font-size: 55px;
    }
  }
  .box2 {
    height: 1000px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .boxes {
      height: 100px;
      width: 100%;
      border-bottom: 6px solid black;
      h1 {
        text-align: left;
        margin-top: 20px;
      }
    }
    
  }
`;
