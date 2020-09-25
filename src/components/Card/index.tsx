import React from "react";
import { Container, Content, Footer } from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <Content>
        {/*     <h1>Content</h1> */}
        <img
          src="http://www.comix.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/9/191872_900x900fabuloso.jpg"
          alt="quadrinho"
        />
      </Content>
      <Footer>
          <h1>Detalhes</h1>
          </Footer>
    </Container>
  );
};

export default Card;
