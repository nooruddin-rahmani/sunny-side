import React from "react";
import styled from "styled-components";
function SectionFour() {
  return (
    <Container>
      <SectionRight>
        <h1>Graphic Design</h1>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </SectionRight>
      <SectoinLeft>
        <h1>Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </SectoinLeft>
    </Container>
  );
}

export default SectionFour;
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const SectionRight = styled.div`
  background: url("./images/desktop/image-graphic-design.jpg");
  width: 50%;
`;
const SectoinLeft = styled.div`
  background: url("./images/desktop/image-photography.jpg");
  width: 50%;
  height: 600px;
`;
