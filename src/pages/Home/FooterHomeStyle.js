import styled from "styled-components";
import { backgroundLogin, whiteColor } from "../../UI/variable";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${backgroundLogin};
  color: ${whiteColor};
  /* width: 100vw;
  height: 105px; */
  /* z-index: 1; */

  /* clear: both; */
  width: 100vw;
  position: relative;
  bottom: 0;
  height: 105px;
`;

export const TextAlert = styled.div`
  display: flex;
  width: 50%;
  gap: 0.8rem;
  /* width: 540px; */
  text-align: right;
  /* margin-left: 20%; */

  p {
    font-size: 0.7em;
    line-height: 15px;
    width: 53%;
    margin-left: 18rem;
    margin-top: 1rem;
  }

  hr {
    border: 1px solid white;
    height: 50px;
    align-items: center;
  }
`;

export const ContainerCounter = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  /* margin-left: -20rem; */

  p {
    font-size: 0.7rem;
    width: 28%;
    align-items: flex-end;
  }
`;

export const CounterNumber = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 3rem;
    font-weight: 700;
    align-items: center;
  }
`;


export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #c13216;
  width: 130px;
  height: 106.5px;
`;

export const NavButton = styled(Button)`
  background-color: white;
  color: #c13216;
`;

export const LogoutButton = styled(Button)`
  color: white;
`;
