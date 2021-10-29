import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <SunnyHeader>
      <nav>
        <img src="./images/logo.svg" alt="logo" />
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </SunnyHeader>
  );
}

export default Header;
const SunnyHeader = styled.header`
  background: transparent;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: 3vw;
      li {
        color: hsl(0, 0%, 100%);
        list-style-type: none;
        padding: 0vh 2vw;
      }
      li:hover {
        cursor: pointer;
        li:nth-child(4):hover {
          color: hsl(213, 9%, 39%);
          background: hsl(0, 0%, 100%);
        }
      }
      li:nth-child(4) {
        color: hsl(213, 9%, 39%);
        font-family: serif;
        font-size: 14px;
        background: hsl(0, 0%, 100%);
        border-radius: 20px;
        padding: 2vh 1vw;
        font-weight: bold;
      }
    }
    img {
      margin: 7vh 3vw;
    }
  }
`;
