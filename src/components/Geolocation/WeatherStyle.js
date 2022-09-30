import styled from "styled-components";
import { titleColorHome } from "../../UI/variable";

export const ContainerWeather = styled.div`
    color: ${titleColorHome};

    p {
        font-size: 0.8rem;
    }
    div {
        display: flex;
        justify-content: space-evenly;
    }
    h2 {
        font-size: 2rem;
        font-weight: bolder;
    }
`