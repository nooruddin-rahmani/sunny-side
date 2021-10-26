import React from "react";
import styled from "styled-components";
function SectionTwo() {
  return (
    <Container>
      <div>
        <div className="section">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span>LEARN MORE</span>
        </div>
      </div>
      <img src="./images/desktop/image-transform.jpg" alt="" />
    </Container>
  );
}

export default SectionTwo;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    width: 50%;
    height: 600px;
    overflow-x: hidden;
  }
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0vh 8vw;
    color: hsl(212, 27%, 19%);
    h1 {
      font-family: "Fraunces", serif;
      width: 20vw;
      font-weight: 700;
    }
    p {
      color: hsl(213, 9%, 39%);
      font-size: 14px;
      width: 400px;
      margin-top: 0;
      margin-bottom: 5vh;
    }
    span {
      font-weight: bold;
      font-family: "Fraunces", serif;
      font-size: 13px;
      width: 6.9vw;
      position: relative;
      cursor: pointer;
    }
    span::after {
      content: "";
      width: 100%;
      height: 5px;
      background: hsl(51, 100%, 49%);
      display: flex;
      position: relative;
      top: -0.5vh;
      opacity: 0.3;
    }
  }
`;
