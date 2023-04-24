import styled from "styled-components";
import { StyledLink } from "../../styles/Atoms";


export const HomeWrapper = styled.div`
    display:flex;
    justify-content:center;
`

export const HomeContainer = styled.div`
    margin:30px;
    padding: 60px 90px;
    display:flex;
    flex-direction: row;
    max-width:1200px;
    background-color: var(--background-light);
`

export const LeftColumn = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    flex:1;
    ${StyledLink}{
        max-width:250px;
    }
`

export const HomeTitle = styled.h2`
    max-width: 600px;
    padding-bottom: 30px;
    line-height: 50px;
    font-size:50px;
`

export const Illustration = styled.img`
    flex:1;
`
