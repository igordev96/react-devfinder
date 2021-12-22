import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    transition: 400ms;
  }

  body {
    background-color: #141c2f;

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
  }

  a {
    text-decoration: none;
    color: #007afe;
  }

  button {
    background-color: #007afe;
    cursor: pointer;
    border: none;
    color: #fff;

    &:hover {
      background: green;
    }
  }

  img:hover {
    transform: scale(1.2);
  }
`;

export const Container = styled.main`
  height: 450px;
  width: 800px;
`;