import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>My beautiful blog</Titulo>
      <MenuNavbar>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </MenuNavbar>
    </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column; /* Alinea verticalmente el contenido */
  text-align: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const MenuNavbar = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;

    &:hover {
      color: #197e19;
    }

    &.active {
      border-bottom: 2px solid #165168;
      padding-bottom: 3px;
    }
  }
`;

export default Header;
