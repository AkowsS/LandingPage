import React from 'react';
import { Footer, Header, WelcomePage, Colections, Comments } from "../../components"
import { Container } from './HomePage.styles';

export const HomePage: React.FC = () => {

  return (
  <Container>
    <Header/>
    <WelcomePage/>
    <Colections/>
    <Comments/>
    <Footer/>
  </Container>
  ); 
};