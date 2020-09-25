import React from "react";
import { Container, Content } from "./styles";
import Logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <input placeholder="Buscar"></input>
        <FiSearch />
      </Content>
    </Container>
  );
};

export default Header;
