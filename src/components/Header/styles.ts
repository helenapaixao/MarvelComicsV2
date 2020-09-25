import styled from "styled-components";

export const Container = styled.header`
  background: #000000;
  padding: 32px 0;
  height: 170px;
  width: 100%;

  img {
    width: 200px;
    height: 120px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;
  width: 100%;

  /* img {
    margin-left: auto;
} */

  input {
    border-radius: 5px;
    border: none;
    margin-left: 580px;
  }

  svg {
    margin-left: auto;
  }
`;
