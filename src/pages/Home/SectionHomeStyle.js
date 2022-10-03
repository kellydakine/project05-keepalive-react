import styled from "styled-components";
import { titleColor, titleColorHome } from "../../UI/variable";
import ImgBola from "../../assets/bola-teste.png";

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
  }
`;

export const BallImage = styled.img`
  align-self: flex-end;
  max-width: 50vw;
  max-height: 70vh;

  /* @media (max-width: 1440px) {
    width: 36vw;
    height: 70vh;
  } */

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

// export const ImgCompasso = styled.div`
//   background-image: url(${ImgBola});
//   width: 45vw;
//   height: 74.8vh;
//   background-repeat: no-repeat;
//   background-size: 70% 80%;
//   background-size: contain;
//   background-position: bottom left;

//   @media (max-width: 1440px) {

//   }

//   @media (max-width: 780px) {
//     display: none;
//   }
// `;

export const Descriptions = styled.div`
  padding-right: 8rem;
  text-align: right;

  h3 {
    font-size: 2em;
    color: ${titleColor};
    font-weight: 700;
  }
  h2 {
    font-size: 2.8em;
    color: ${titleColor};
    font-weight: 700;
  }
  p {
    color: ${titleColorHome};
    font-size: 1.2em;
    margin: 0;
  }

  @media (max-width: 1440px) {
    padding-right: 4rem;
    width: 60%;
    h3 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1120px) {
    padding-right: 3rem;
    width: 60%;
    h3 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 960px) {
    padding-right: 3rem;
    width: 70%;
    h3 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 780px) {
    width: 100vw;
    margin-right: 1.5rem;
    h3 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
