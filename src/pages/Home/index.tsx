import React from "react";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Content } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </>
  );
};

export default Home;
