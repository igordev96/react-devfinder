import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to bottom right, #333 55%, #e5e5e5 50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;