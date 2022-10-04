import styled from "styled-components";
import { backgroundLogin, titleColor, whiteColor } from "../../UI/variable";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${backgroundLogin};
  color: ${whiteColor};

  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;

  @media (max-width: 1024px) {
    /* height: 105.5px;
    max-height: 6.5rem; */
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    position: relative;
    /* height: 100vh; */
  }
`;

export const TextAlert = styled.div`
  display: flex;
  width: 50vw;
  gap: 0.8rem;
  text-align: right;

  p {
    font-size: 0.7em;
    line-height: 15px;
    /* width: 53%; */
    /* margin-left: 15rem; */
    margin-top: 0.8rem;
    /* border-bottom: 1px solid white; */

    @media (max-width: 780px) {
      /* width: 00px; */
      text-align: center;
      margin-top: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid white;
    }
  }

  hr {
    border: 1px solid white;
    height: 50px;
    align-items: center;

    @media (max-width: 780px) {
      display: none;
    }
  }

  @media (max-width: 1430px) {
    /* width: 60%; */
    p {
      margin-left: 5rem;
    }
  }

  @media (max-width: 1120px) {
    p {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 780px) {
    width: 80vw;
    
  }

  /* @media (max-width: 880px) {
    width: 100vw;
    p {
      width: 100%;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
    }
    hr {
      gap: 1rem;
    }
  } */
`;

export const ContainerCounter = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  /* margin-left: -20rem; */

  p {
    font-size: 0.7rem;
    /* width: 28%; */
    /* align-items: flex-end; */
  }

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 780px) {
    padding: 0.8rem;
  }
`

export const CounterNumber = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 3rem;
    font-weight: 700;
    align-items: center;
  }

  @media (max-width: 1024px) {
    h3 {
      font-size: 2.5rem;
    }
  }
`

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 780px) {
    padding-bottom: 1rem;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 130px;
  height: 106.5px;
`;

export const NavButton = styled(Button)`
  background-color: ${whiteColor};
  color: ${titleColor};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 110px;
  }

  @media (max-width: 780px) {
    border-radius: 5px;
  }

  @media (max-width: 420px) {
    width: 100px;
    height: 100px;
    font-size: 0.8rem;
  }
`

export const LogoutButton = styled(Button)`
  color: ${whiteColor};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 110px;
  }

  @media (max-width: 420px) {
    width: 100px;
    height: 100px;
    font-size: 0.8rem;
  }
`;
