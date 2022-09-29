import styled from "styled-components";
import { whiteColor } from "../../UI/variable";

export const ContainerInput = styled.div`
  display: flex;
  margin-left: 2rem;

  input {
    border-radius: 50px;
    background: none;
    /* border: ${whiteColor}; */
    padding: 0.9rem;
    margin-bottom: 1.5rem;
    width: 16rem;
    color: ${whiteColor};
    font-family: "Mark Pro", sans-serif;
    ::-webkit-input-placeholder {
      color: white;
    }
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
