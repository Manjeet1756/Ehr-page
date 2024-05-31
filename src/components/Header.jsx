import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Container = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 150px;
    background: ${scrolled ? "rgba(217, 217, 217, 0.5)" : "white"};
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
    .img-div {
      height: 100px;
      width: 210px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      h1 {
        font-size: 30px;
        font-weight:500;
      }

      img {
        height: 92px;
        width: 106px;

        object-fit: contain;
        filter: brightness(1.2);
      }
    }

    .header-listItems {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      text-decoration: none;
      margin-left: 0px;
      gap: 18px;

      .items {
        list-style: none;
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 20px;

        padding: 5px;
        font-weight: normal;
        &:hover {
          color: #0079ff;
        }
      }
    }

    button {
      height: 60px;
      width: 180px;
      border-radius: 77px;
      font-size: 24px;
      border: none;
      background-color: #9747ff;
      color: white;
    }
  `;

  return (
    <Container>
      <div className="img-div">
        <Link to="/Home" className="items">
          <img src="final_ceson_logo.png" alt="" />
        </Link>
        <h1>CESON</h1>
      </div>

      <div>
        <ul className="header-listItems">
          <li>
            <Link to="/About" className="items">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="items">
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/Services" className="items">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Home" className="items">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button>Sign-Up</button>
      </div>
    </Container>
  );
};

export default Header;
