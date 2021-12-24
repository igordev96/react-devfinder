import styled from "styled-components";

export const Btn = styled.button`
  height: 2rem;

  background-color: #555;
  color: #e5e5e5;

  border-radius: 20px;

  transition: background-color 300ms;

  &:hover {
    background-color: #333;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  ${Btn} {
    width: ${props => props.isActive ? "3rem" : "6rem"};
  }

  input {
    width: 20rem;
    outline: none;
    border: 2px dashed #555;
    padding: 0.2rem;
    display: ${props => props.isActive ? "flex" : "none"};
  }
`;