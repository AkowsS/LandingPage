import React from "react";
import { Container, CardArea, CardMail, CardUser, CardAreaSecondary, CardAreaDiv, CardText, DivLine } from "./Comments.styles";

export const Comments: React.FC = () => {

  return (
    <Container>
      <h1>Comentários</h1>
      <CardAreaDiv>
        <CardAreaSecondary>
          <div>
            <img/>
            <div>
              <CardUser>Nome usuário</CardUser>
              <CardMail>@user123</CardMail>
            </div>
          </div>
          <DivLine></DivLine>
          <CardText>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Nunc ac semper quam. 
            Interdum et malesuada 
            fames ac ante ipsum primis 
            in faucibus. 
          </CardText>
        </CardAreaSecondary>
        <CardArea>
          <div>
            <img/>
            <div>
              <CardUser>Nome usuário</CardUser>
              <CardMail>@user123</CardMail>
            </div>
          </div>
          <DivLine></DivLine>
          <CardText>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Nunc ac semper quam. 
            Interdum et malesuada 
            fames ac ante ipsum primis 
            in faucibus. 
          </CardText>
        </CardArea>
        <CardAreaSecondary>
          <div>
            <img/>
            <div>
              <CardUser>Nome usuário</CardUser>
              <CardMail>@user123</CardMail>
            </div>
          </div>
          <DivLine></DivLine>
          <CardText>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Nunc ac semper quam. 
            Interdum et malesuada 
            fames ac ante ipsum primis 
            in faucibus. 
          </CardText>
        </CardAreaSecondary>
      </CardAreaDiv>
      
    </Container>
  );
};