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
    </div>
  );
}

export default App;
const LandingComponent = styled.div`
  height: 1000px;
  background: url("./images/desktop/image-header.jpg");
  background-size: cover;
  background-position: center;
`;
