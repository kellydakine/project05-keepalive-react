import styled from "styled-components";
import { titleColor, titleColorHome } from "../../UI/variable";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  @media (max-width: 780px) {
    padding: 0;
    width: 100vw;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
`;

export const BallImage = styled.img`
  align-self: flex-end;
  max-width: 50vw;
  max-height: 70vh;

  @media (max-width: 960px) {
    max-width: 30vw;
    max-height: 30rem;
  }

  @media (max-width: 1024px) {
    max-width: 35vw;
    max-height: 30rem;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const Descriptions = styled.div`
  padding-right: 8rem;
  text-align: right;

  h3 {
    font-size: 2em;
    color: ${titleColor};
    font-weight: 700;
  }
  h2 {
    font-size: 2.5em;
    color: ${titleColor};
    font-weight: 700;
  }
  p {
    color: ${titleColorHome};
    font-size: 1.2em;
    margin: 0;
  }

  @media (max-width: 1120px) {
    padding-right: 3rem;
    width: 70%;
    h3 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 780px) {
    width: 100vw;
    margin-right: 0;
  }

  @media (max-width: 420px) {
    margin-right: 0rem;
    padding: 0.5rem;
    text-align: start;
    h3 {
      font-size: 1rem;
    }
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
