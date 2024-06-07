import React from "react";
import styled from "styled-components";

const Section3 = () => {
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
            fontSize: "22px",
          }}
        >
          Features
        </button>
      </div>

      <div className="box2">
        <div className="img-box">
          <img src="Rectangle 20.png" alt="" />
        </div>

        <div className="right-box">
          <h1>Core HR simplified </h1>

          <p style={{ fontSize: "22px" }}>
            Say goodbye to mundane spreadsheets or rigid systems to manage HR
            tasks. Get smarter and more efficient software with features
            designed to free you from administrative work.
          </p>

          <div className="para">
            {" "}
            <span className="text-align">
              <img src="Group 6647.png" alt="" />
              <p>Flexible goal setting and KRA mapping</p> <br />
            </span>
            <span className="text-align">
              {" "}
              <img src="Group 6647.png" alt="" />
              <p>Continuous reviews and performance appraisals</p> <br />
            </span>
            <span className="text-align">
              <img src="Group 6647.png" alt="" />
              <p>360-degree feedback </p>
              <br />
            </span>
            <span className="text-align">
              {" "}
              <img src="Group 6647.png" alt="" />
              <p>Analytics to identify performance gaps</p>
            </span>
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="left-box">
          <h1>Performance management at its best</h1>

          <p style={{ fontSize: "22px" }}>
            Enrich the talent that nurtures your business. Get insight on how
            each team is performing, every individual's skills and potential,
            and the ways you can improve organizational performance.
          </p>

          <div className="para">
            {" "}
            <span className="text-align">
              <img src="Group 6647.png" alt="" />
              <p>An employee database that scales</p> <br />
            </span>
            <span className="text-align">
              {" "}
              <img src="Group 6647.png" alt="" />
              <p>Efficient employee case management</p> <br />
            </span>
            <span className="text-align">
              <img src="Group 6647.png" alt="" />
              <p>Smart HR workflows</p> <br />
            </span>
            <span className="text-align">
              {" "}
              <img src="Group 6647.png" alt="" />
              <p>Insightful analytics</p>
            </span>
          </div>
        </div>

        <div className="img-box">
          <img src="Rectangle 20 (1).png" alt="" />
        </div>
      </div>

      <div className="box4">
        <img src="Group 1321314607.png" alt="img" />
      </div>
    </Container>
  );
};

export default Section3;

const Container = styled.div`
  height: 1800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #e9edf0;

  .box1 {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box2 {
    height: 850px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 150px;
    .img-box {
      height: 850px;
      width: 50%;

      img {
        height: 850px;
        width: 100%;
        object-fit: contain;
      }
    }

    .right-box {
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      gap: 60px;
      height: 850px;
      width: 50%;
      padding: 120px 80px 120px 60px;
      h1 {
        font-size: 50px;
      }

      .text-align {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 10px;
      }
      .para {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        p {
          font-size: 22px;
        }
      }
    }
  }

  .box3 {
    height: 850px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 100px;
    position: relative;

    .img-box {
      height: 850px;
      width: 50%;

      img {
        height: 850px;
        width: 100%;
        object-fit: contain;
      }
    }

    .left-box {
      display: flex;
      justify-content: center;
      align-items: left;
      flex-direction: column;
      gap: 100px;
      height: 850px;
      width: 50%;
      padding: 120px 80px 120px 60px;

      h1 {
        font-size: 50px;
      }
      p {
        font-size: 22px;
      }

      .text-align {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 10px;
      }

      .para {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        p {
          font-size: 22px;
        }
      }
    }
  }

  .box4 {
    height: 600px;
    width: 400px;

    position: relative;
    top: -400px;
    left: 530px;
    img {
      height: 600px;
      width: 100%;
      object-fit: contain;
      border-radius: 45px;
    }
  }
`;
