import React from 'react';
import { Container, Logo, List, DivItems, Items, DivMenu, Menu, ResponDiv } from "./Header.styles";
import { menu } from "../../assets/";
export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Container>
      <Logo><p>Titulo</p></Logo>
      <ResponDiv>
        <img src={menu} alt="options" />
        <div>
            <List><a href="#home"><p>Início</p></a></List>
            <List><a href="#colections"><p>Coleções</p></a></List>
            <List><a href="#comments"><p>Comentários</p></a></List>
            <List><p>Lista</p></List>
        </div>
      </ResponDiv>
      <DivItems>
        <Items><a href="#home">Início</a></Items>
        <Items><a href="#colections">Coleções</a></Items>
        <Items><a href="#comments">Comentários</a></Items>
        <DivMenu>
          <Items>Lista</Items>
          <div>
            <Menu>
              <List onClick={handleClose}><p>Item 1</p></List>
              <List onClick={handleClose}><p>Item 2</p></List>
              <List onClick={handleClose}><p>Item 3</p></List>
            </Menu>
          </div>
        </DivMenu>
      </DivItems>
      
    </Container>
  );
};
