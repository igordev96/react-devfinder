import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2a48;

  height: 4rem;
  width: 100%;

  border-radius: 15px;

  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .glass {
    font-size: 3rem;
    color: #1f4caf;
  }

  input {
    background: #1f2a48;
    color: #fff;
    width: 100%;
    font-size: 1rem;

    margin-left: 1rem;

    border: none;
    outline: none;

    &::placeholder {
      font-weight: 300;
      color: white;
    }
  }

  button {
    height: 3rem;
    width: 7rem;
    border-radius: 10px;
  }
`;