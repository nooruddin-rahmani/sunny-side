import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import Testeminials from "./components/Testeminials";
import Images from "./components/Images";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <LandingComponent>
        <Header />
        <Main />
      </LandingComponent>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Testeminials />
      <Images />
      <Footer />

      <Attribution>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#"> Nooruddin</a>.
      </Attribution>
    </div>
  );
}

export default App;
const LandingComponent = styled.div`
  background: url("./images/desktop/image-header.jpg");
  background-size: cover;
`;
const Attribution = styled.div`
  background: #6dd3be;
  display: flex;
  justify-content: center;
  align-items: center;
`;
