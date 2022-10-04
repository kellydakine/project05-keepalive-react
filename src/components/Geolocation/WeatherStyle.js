import styled from "styled-components";
import { titleColorHome } from "../../UI/variable";

export const ContainerWeather = styled.div`
  color: ${titleColorHome};

  p {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  img {
    width: 30%;
  }
  h2 {
    font-size: 2.3rem;
    font-weight: bolder;
  }

  @media (max-width: 320px) {
    img {
      width: 25%;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
