import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterSection>
      <h2>sunnyside</h2>
      <Links>
        <span>About</span>
        <span>Services</span>
        <span>Project</span>
      </Links>
      <Social>
        <img src="./images/icon-facebook.svg" alt="faebook" />
        <img src="./images/icon-instagram.svg" alt="insta" />
        <img src="./images/icon-twitter.svg" alt="twitter" />
        <img src="./images/icon-pinterest.svg" alt="pinterest" />
      </Social>
    </FooterSection>
  );
}

export default Footer;
const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #6dd3be;
  h2 {
    color: hsl(167, 40%, 24%);
    font-family: "Barlow", sans-serif;
    font-weight: 900;
    font-size: 27px;
    margin: 5vw 0 2vw 0;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  color: hsl(167, 40%, 24%);
  span {
    margin: 2vw;
  }
`;
const Social = styled.div`
  margin: 3vw;
  img {
    margin: 1vw;
  }
`;
