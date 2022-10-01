import styled from "styled-components";
import { backgroundLogin, whiteColor } from "../../UI/variable";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${backgroundLogin};
  color: ${whiteColor};
  width: 100vw;
  height: 105px;
  /* z-index: 1; */
`;

export const TextAlert = styled.div`
  display: flex;
  width: 50%;
  gap: 0.8rem;
  /* width: 540px; */
  text-align: right;
  /* margin-left: 20%; */
`;
