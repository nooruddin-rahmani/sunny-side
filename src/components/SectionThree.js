import React from "react";
import styled from "styled-components";
function SectionThree() {
  return (
    <Container>
      <div>
        <div className="section">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <span>LEARN MORE</span>
        </div>
      </div>
      <img src="./images/desktop/image-stand-out.jpg" alt="" />
    </Container>
  );
}

export default SectionThree;
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
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
      background: hsl(7, 99%, 70%);
      display: flex;
      position: relative;
      top: -0.8vh;
      opacity: 0.7;
      border-radius: 5px;
    }
  }
`;
