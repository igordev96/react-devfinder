import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 80%;

  & + div {
    margin-top: 0.8rem;
  }

  button {
    height: 1.2rem;
    width: 1.2rem;
  }

  .check {
    height: 0.9rem;
    width: 0.9rem;
    margin-left: -1rem;
    border-radius: 40%; 
    background-color: #999;
  }

  .true {
    background-color: #61c436;
    
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "✓";
      font-weight: 900;
    }
  }

  li {
    transition: 300ms;
  }

  .checked {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .delete {
    margin-left: auto;

    background-color: transparent;
    border-radius: 30%;

    transition: 300ms;
    
    &::after {
      content: "🗑️";
      font-size: 1rem;
    }

    &:hover {
      transform: scale(1.4);
    }
  } 
`;