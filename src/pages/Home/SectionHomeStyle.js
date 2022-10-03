import styled from "styled-components";
import { titleColor, titleColorHome } from "../../UI/variable";
import ImgBola from "../../assets/bola-teste.png";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
`;

export const BallImage = styled.img`
  /* width: 100vw;
  max-width: 600px;
  height: auto;

  /* max-inline-size: 50%;
  block-size: auto;
  object-fit: cover;
  object-position: bottom center; */

  // display: block;

  align-self: flex-end;
  max-width: 45vw;
  max-height: 38rem;

  @media (max-width: 1440px) {
    max-width: 35vw;
    max-height: 35rem;
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
//   background-position: bottom left;

//   @media (max-width: 1440px) {
    
//   }

//   @media (max-width: 780px) {
//     display: none;
//   }
// `;

export const Descriptions = styled.div`
  /* width: 60%; */
  padding-right: 8rem;
  text-align: right;

  h3 {
    font-size: 2em;
    color: ${titleColor};
    font-weight: 700;
    /* margin: 0; */
  }
  h2 {
    font-size: 2.8em;
    /* margin: 0; */
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
`;
