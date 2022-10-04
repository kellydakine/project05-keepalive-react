import styled from "styled-components";
import { mainColor } from "../../UI/variable";

export const ContainerInput = styled.div`
  display: flex;
  margin-left: 2rem;

  input {
    border-radius: 50px;
    background: none;
    padding: 0.9rem 2.2rem 0.9rem 0.5rem;
    margin-bottom: 1.5rem;
    width: 16rem;
    color: ${mainColor};
    font-family: "Mark Pro", sans-serif;
    ::-webkit-input-placeholder {
      color: ${mainColor};
    }
  }

  @media (max-width: 380px) {
   width: 18rem;
   justify-content: center;
   margin: 0;
  }

  @media (max-width: 320px) {
   width: 15rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-top: -1.5rem;
  transition: 1s;
  ${(props) => props.clicked ? "transform: translate(-50px,0)" : "transform: translate(0)"}
`;
