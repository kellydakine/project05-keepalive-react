import styled from "styled-components";
import { titleColor, titleColorHome } from "../../UI/variable";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BallImage = styled.img`
  max-width: 600px;
  max-height: 74.8vh;
  width: 45vw;
  align-self: flex-end;
  box-sizing: border-box;
  margin-bottom: -5%;
  /* z-index: -1; */
`;

export const Descriptions = styled.div`
  width: 50%;
  padding-right: 8rem;
  text-align: right;

  h3 {
    font-size: 2em;
    color: ${titleColor};
    font-weight: 700;
    /* margin: 0; */
  }
  h2 {
    font-size: 3em;
    /* margin: 0; */
    color: ${titleColor};
    font-weight: 700;
  }
  p {
    color: ${titleColorHome};
    font-size: 1.2em;
    margin: 0;
  }
`;
