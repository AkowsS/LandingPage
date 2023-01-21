import React from "react";
import { Container, ImgArea, TextArea } from "./WelcomePage.styles";
import { imgPage1 } from "../../assets";

export const WelcomePage : React.FC = () => {

  return (
    <Container id="home">
      <TextArea>
        <div>
          <h1>Texto impactante!!!</h1>
          <h2>Texto nao tao impactante</h2>
          <button><p>Botao</p></button>
        </div>
      </TextArea>
      <ImgArea>
        <img src={imgPage1} alt="testImg" />
      </ImgArea>
    </Container>
  );
};
