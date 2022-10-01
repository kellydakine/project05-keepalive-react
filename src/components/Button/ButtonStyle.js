import styled from "styled-components";
import { backgroundButton, buttonShadow } from "../../UI/variable";

export const BtnContinue = styled.button`
  background: ${backgroundButton};
  box-shadow: ${buttonShadow};
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  border: none;
  border-radius: 50px;
  width: 18rem;
  height: 3rem;
  color: white;
  font-size: 15px;
  margin-top: 4em;
  cursor: pointer;
  :active {
    background: #DE2904;
  }

  @media (max-width: 320px) {
   width: 15rem;
  }
`;