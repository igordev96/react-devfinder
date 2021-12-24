import styled from "styled-components";

export const Box = styled.section`
  position: relative;
  height: 30rem;
  width: 30rem;
  background-color: white;
  border-radius: 25px;
  padding-left: 5rem;
  overflow: auto;

  h1 {
    font-size: 2rem;
    margin: 3rem 0;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #e5e5e5;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

`;