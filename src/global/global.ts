import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

body {
    font: 400 14px 'Poppins', sans-serif;
    color: #FFFF;
    background: #FFFF;
    -webkit-font-smoothing: antialiased;
}

h1 {
    font-size: 20px;
}


body, input, button {
    font: 16px 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
  }

`;
