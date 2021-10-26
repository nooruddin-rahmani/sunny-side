import React from "react";
import styled from "styled-components";
function SectionFour() {
  return (
    <Container>
      <GraphicDesign>
        <h1>Graphic Design</h1>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </GraphicDesign>
      <Photography>
        <h1>Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </Photography>
    </Container>
  );
}

export default SectionFour;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const GraphicDesign = styled.div`
  background: url("./images/desktop/image-graphic-design.jpg");
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 50vh;
    font-family: "Fraunces", serif;
    font-size: 2vw;
    color: hsl(167, 40%, 24%);
  }
  p {
    width: 350px;
    text-align: center;
    color: hsl(213, 9%, 39%);
    font-weight: 700;
  }
`;
const Photography = styled.div`
  background: url("./images/desktop/image-photography.jpg");
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin-top: 50vh;
    font-family: "Fraunces", serif;
    font-size: 2vw;
    color: hsl(198, 62%, 26%);
  }
  p {
    width: 350px;
    text-align: center;
    color: hsl(213, 9%, 39%);
    font-weight: 700;
  }
`;
