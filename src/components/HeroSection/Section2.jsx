import React from "react";
import styled from "styled-components";
const Section2 = () => {
  return (
    <Container>
      <div className="Container-box1">
        <button
          style={{
            height: "50px",
            width: "140px",
            border: "2px solid #9D9D9D",
            backgroundColor: "#F1EBFF",
            color: "#4F87FF",
            borderRadius: "45px",
            fontSize:"22px"
          }}
        >
          Features
        </button>
      </div>
      {/* ------box1 finish */}
      <div ClassName="Container-box2">
        <p style={{fontSize:"54px"}}>The Only Tool You Need</p>
      </div>

      {/* --box3 start */}
      <div className="Container-box3">

        <div className="Container-box3-subBox-1">
          <div className="Payment-Management">
            <h1>Payment Mangement</h1>
            <p>Automated payroll processing, Tax calculation</p>
     
              <img src="Frame 48095510.png" alt="img"  style={{height:"200px",width:"300px"}}/>

              <img src="send money.png" alt="img" style={{height:"150px",width:"300px",objecFit:"contain"}} />
         
          </div>

          <div className="Attendance-TimeTracking">
            <h1>Attendance and Time Tracking</h1>
            <p>Real-time attendance monitoring</p>
            <img src="Group 1321314602.png" alt="" style={{heigth:"350px",width:"350px",objectFit:"contain"}} />
          </div>
        </div>
       

        <div className="Container-box3-subBox-2">
          
          <div className="images-box1">
            <img
              src="Graph 21.png"
              alt=""
              style={{ height: "450px", width: "900px" }}
              className="img1"
            />
            <img
              src="Bubble.png"
              style={{ height: "620px", width: "520px" }}
              alt=""
              className="img2"
            />
          </div>
          <div className="images-box2">
            <img
              src="Donut.png"
              alt=""
              style={{ height: "370px", width: "370px" }}
              className="img1"
            />

            <img
              src="Frame 6655.png"
              style={{ height: "540px", width: "500px" }}
              alt=""
              className="img2"
            />
            </div>
            
            <div style={{
              heigth:"450px",
              width:"100%",
            
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
             


            }} className="report">
             <div className="part-1">
              <h1 style={{fontSize:"40px"}}>Reporting and Analytics</h1>
              <p style={{fontSize:"30px"}}>customizable Reports and Dashboards</p>
              </div>

                <img  src="Graph 4.png" alt="img" />
            </div>

            </div>
            </div>
  
      
    </Container>
  );
};

export default Section2;

const Container = styled.div`
  height: 2200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap:20px;

  background-color: #E9EDF0;
   padding:100px 50px;

  .Container-box1 {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* -------------------box 1 finish------------ */

  .Container-box2 {
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;

    p {
      font-size: "84px";
      font-weight:bolder;
    }
  }
  /* --------box 2 finish--------------- */

  .Container-box3 {
    height: 1800px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;

    .Container-box3-subBox-1 {
      height: 1800px;
      width: 35%;
      display: flex;
      flex-direction: column;
      gap:150px;

      .Payment-Management{


        height:620px;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:50px;
        background-color: #c9e7f8;
        padding:40px 0px;
        border-radius:45px;
        text-align:center;
        margin-top:50px;
        h1{

          font-size:35px;
       
        }
        p{
          font-size:22px;

        }

       

        
      
      }

      .Attendance-TimeTracking{

        height:800px;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:45px;
        background-color: #F1EBFF;
        gap:50px;
        text-align:center;
        gap:50px;
        h1{

font-size:35px;

}
p{
font-size:22px;

}



    

      }


    }

    /* ----------sub box 1 finish-------------------- */
    .Container-box3-subBox-2 {
      height: 1900px;
      width:65%;
      display: flex;
      flex-direction: column;
      justify-content:space-between;
      align-items: center;
      padding:150px 0px;

      .images-box1 {
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .img1 {
          height: 500px;
        width: 100%;
        position:relative;
        object-fit:contain;
         
        }
        .img2 {
          height: 500px;
           width: 100%;
          position: absolute;
          left: 900px;
       
        
        }
      }
      .images-box2 {
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .img1 {
          height: 500px;
          width: 100%;
          position: relative;
          margin-right:500px;
          margin-bottom:100px;
         
        }
        .img2 {
          height: 500px;
          width: 100%;
          position: absolute;
          left: 950px;
          top:1500px;

        
        }
      }

      .report{

        height:500px;
        width:100%;
        border-top: 4px solid lightgray;
        border-left: 4px solid lightgray;
        border-right: 4px solid lightgray;
        border-top-left-radius:45px;
        border-top-right-radius:45px;
      background-color:white;
       
        .part-1{

          height:100%;
          width:50%;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
          align-items:center;
         padding:90px 40px;
   

        }

        img{
          height:350px;
          width:50%;
          object-fit:cover;

        }


      }
    }
  }
`;
