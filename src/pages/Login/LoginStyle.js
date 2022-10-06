import { backgroundLogin, whiteColor, secondaryColor, mainColor } from "../../UI/variable";
import styled from "styled-components";

export const SectionLogin = styled.section`
  background: ${backgroundLogin};
  color: ${whiteColor};
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 653px) and (max-height: 280px) {
    height: 100%;
  }

  @media screen and (max-height: 680px) { 
    min-height: 660px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${mainColor};
  width: 50vw;

  img {
    display: none;
  }
  h1 {
    text-align: justify;
    font-size: 3.3rem;
    margin-bottom: 1rem;
    font-weight: 400;
    width: 18rem;
  }
  p {
    width: 18rem;
    line-height: 1.2rem;
    margin-bottom: 15vh;
  }
  h2 {
    margin-bottom: 2rem;
    margin-right: 13.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    img {
      display: block;
      width: 8rem;
      height: 3.5rem;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 2.5rem;
      width: 85vw;
    }
    p {
      font-size: 0.8rem;
      margin-left: 0rem;
      width: 85vw;
      margin-bottom: 4rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-left: 2.5rem;
    }
  }
`;

export const Span = styled.span`
  color: ${secondaryColor};
  font-size: 1rem;
  text-align: center;
  width: 17rem;

  @media (max-width: 320px) {
    width: 14rem;
    font-size: 0.8rem;
  }
`;

export const Banner = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 50vw;
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`;
