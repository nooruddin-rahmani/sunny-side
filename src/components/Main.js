import React from "react";
import styled from "styled-components";
function Main() {
  return (
    <MainSection>
      <h1>WE ARE CREATIVES</h1>
      <img src="./images/icon-arrow-down.svg" alt="" />
    </MainSection>
  );
}

export default Main;
const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  h1 {
    font-weight: 900;
    font-size: 8vh;
    color: hsl(0, 0%, 100%);
    font-family: "Fraunces", serif;
    word-spacing: 5px;
    margin-bottom: 18vh;
  }
  img {
    margin-bottom: 50vh;
  }
`;
