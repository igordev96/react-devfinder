import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
    transition: transform 400ms;
  }

  body {
    background-color: #141c2f;

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    overflow: hidden;
    -webkit-font-smoothing: antialiased !important;
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
    transition: background-color 400ms;

    &:hover {
      background-color: green;
    }
  }

  img {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Container = styled.main`
  height: 450px;
  width: 800px;

  @media(max-width: 815px) {
    height: auto;
    width: 80vw;
  }
`;