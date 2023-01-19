import React from "react"
import { Container } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <p>Todos os direitos reservados</p>
        <p>@NomeUsuárioGithub</p>
      </div>
    </Container>
  );
}