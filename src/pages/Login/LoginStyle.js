import {
  backgroundLogin,
  whiteColor,
  secondaryColor,
  mainColor,
} from "../../UI/variable";
import styled from "styled-components";
import Computer from "../../assets/computer.png";

export const SectionLogin = styled.section`
  background: ${backgroundLogin};
  color: ${whiteColor};
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 1024px) {
    /* align-items: center; */
    justify-content: space-evenly;
  }

  @media (max-width: 570px) {
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin: 0 auto; */
  color: ${mainColor};
  width: 50vw;

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

  @media (max-width: 1024px) {
    p {
      font-size: 0.95rem;
    }
  }
`;

export const Span = styled.span`
  color: ${secondaryColor};
  width: 30%;
  text-align: center;
  padding-top: 0.5rem;
`;

// export const BackgroundLogin = styled.div`
//   background-image: url(${Computer});
//   display: flex;
//   justify-content: flex-end;
//   width: 50%;
//   height: 100vh;
//   background-size: cover;
//   background-repeat: no-repeat;

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

// export const ImgLogo = styled.img`
//   width: 15vw;
//   height: 8vh;
//   margin-right: 35%;
//   margin-top: 1.5rem;

//   @media (max-width: 1024px) {
//     display: none;
//   }
// `;

export const Banner = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 50vw;
  height: 100vh;

  @media (max-width: 800px) {
    display: none;
  }
`;
