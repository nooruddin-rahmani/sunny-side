import React from "react";
import styled from "styled-components";
function Images() {
  return (
    <Image>
      <img src="./images/desktop/image-gallery-milkbottles.jpg" alt="" />
      <img src="./images/desktop/image-gallery-orange.jpg" alt="" />
      <img src="./images/desktop/image-gallery-cone.jpg" alt="" />
      <img src="./images/desktop/image-gallery-sugarcubes.jpg" alt="" />
    </Image>
  );
}

export default Images;
const Image = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 25%;
  }
`;
