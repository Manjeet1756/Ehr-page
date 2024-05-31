import React from "react";
import styled from "styled-components";

const Section5Cards = () => {
  return (
    <Card>
      <div className="text">
        <p>
          UI is the saddle, the stirrups, & the reins. UX is the feeling you get
          being able to ride the horse.
        </p>
      </div>

      <div className="profile">
        <span ClassName="img-box">
          <img src="nahid photo.png" alt="img" />
        </span>
        <span>
          <h1>Nahid Hasan</h1>
          <p>X/UI Designer</p>
        </span>
      </div>
    </Card>
  );
};

export default Section5Cards;

const Card = styled.div`
  height: 350px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #111928;
  border: 3px solid #3437f1;
  border-radius: 50px;
  padding: 30px;
  gap: 40px;

  p {
    color: #ececec;
    font-size: 20px;
  }
  .profile {
    height: 130px;
    width: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0px 10px 0px 10px;

    p {
      color: #ececec;
      font-size: 20px;
    }
    h1 {
      color: white;
      font-size: 25px;
    }
  }

  .img-box {
    height: 60px;
    width: 60px;

    img {
      height: 60px;
      width: 60px;
      object-fit: cover;
    }
  }
`;
