import React from "react";
import styled from "styled-components";
function Testeminials() {
  return (
    <Container>
      <h2>CLIENT TESTIMONIALS</h2>
      <Customers>
        <Emily>
          <img src="./images/image-emily.jpg" alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3>Emily R.</h3>
          <span>Marketing Director</span>
        </Emily>

        <Thomas>
          <img src="./images/image-thomas.jpg" alt="" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h3>Thomas S.</h3>
          <span>Chief Operating Officer</span>
        </Thomas>
        <Jennie>
          <img src="./images/image-jennie.jpg" alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3>Jennie F.</h3>
          <span>Business Owner</span>
        </Jennie>
      </Customers>
    </Container>
  );
}

export default Testeminials;
const Container = styled.div`
  background: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25vh;
  margin-top: 10vh;
  h2 {
    font-family: "Fraunces", serif;
    color: hsl(232, 10%, 55%);
    font-weight: 900;
    word-spacing: 10px;
    font-size: 20px;
    letter-spacing: 5px;
    margin: 150px 0px 80px 0px;
  }
`;
const Customers = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
`;
const Emily = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -3vw;
  margin-right: 4vw;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  p {
    color: hsl(213, 9%, 39%);
    font-family: "Barlow";
    letter-spacing: 0.8px;
    line-height: 25px;
    width: 350px;
  }
  h3 {
    font-family: "Fraunces", serif;
  }
  span {
    color: hsl(232, 10%, 55%);
    font-size: 15px;
  }
`;
const Thomas = styled(Emily)`
  margin-left: -2vw;
  margin-right: 4vw;
`;
const Jennie = styled(Emily)`
  margin-left: -2vw;
`;
