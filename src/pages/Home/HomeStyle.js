import styled from "styled-components";
import { backgroundHome } from "../../UI/variable";

export const Container = styled.div`
    background: ${backgroundHome};
    /* width: 100vw; */
    height: 100vh;
`

export const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 3rem 0 3rem;

    @media (max-width: 420px) {
        padding: 1rem;
    }

    @media (max-width: 320px) {
        justify-content: space-between;
        padding: 0.8rem;
        flex-direction: column;
        align-items: center;

        img {
            width: 40%;
            margin-bottom: 1rem;
        }
    }
`