import styled from "styled-components";
import { titleColorHome } from "../../UI/variable";

export const ContainerTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${titleColorHome};

  p {
    font-size: 7rem;
    font-weight: bolder;
  }
  span {
    font-size: 0.8rem;
    margin-top: -5%;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
