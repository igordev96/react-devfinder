import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px; 

  margin-top: 2rem;
  padding: 4rem 3rem;

  background: #1f2a48;

  display: flex;
  align-items: center;
  gap: 3rem;

  overflow: hidden;

  @media(max-width: 815px) {
    padding: 2rem 2rem;
    flex-direction: column;
  }

  img {
    border-radius: 50%;
    height: 9rem;
    align-self: flex-start;
    margin-top: 1rem;

    @media(max-width: 815px) {
      border-radius: 40px;
      height: 12rem;
      align-self: initial;
      margin: 0;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .profile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1rem;
      column-gap: 7rem;

      @media(max-width: 815px) {
        display: flex;
        flex-direction: column;
      }

      .dev {
        .name {

        }

        .username {
          color: #007afe;
        }
      }

      .joined {
        color: #ccc;
        font-weight: 400;
      }

      .bio {
        color: #999;
        font-weight: 500;
      }
    }

    .stats {
      background: #141c2f;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      padding: 0.6rem 0;

      &:hover {
        transform: scale(1.1);
      }

      .repos, .followers, .following {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .title {
        font-weight: 300;
        font-size: 0.8rem;
        color: #ccc;
      }

      .number {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    .pins {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      font-size: 0.8rem;
      width: 100%;

      .place {
        font-weight: 300;
        &::before {
          content: '📌';
          margin-right: 0.5rem;
          font-weight: 600;
        }
      }

      .twitter {
        font-weight: 300;
        &::before {
          content: '🐤 ';
          font-weight: 600;
        }
      }

      .link {
        font-weight: 300;
        font-size: 0.6rem;
        
        &::before {
          content: '🖇 ';
          font-size: 1rem;
          font-weight: 600;
        }
      }

      .corp {
        font-weight: 300;
        &::before {
          content: '🏢 ';
          font-weight: 600;
        }
      }
    }
  }
`;