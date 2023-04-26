import { Link } from "react-router-dom";
import styled from "styled-components";

export const SurverContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`

export const QuestionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;`

export const QuestionTitle = styled.h2`
    text-decoration: var(--primary-100) underline;
`
export const AnswerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ButtonContainer = styled.div`
    display:flex;
    border: 2px solid var(--background-light);
    border-radius: 31px;
    width:291px;
    height:96px;
    justify-content:center;
    align-items:center;
    margin: 63px 42px 63px;
    background-color: var(--background-light);
    &:hover{
        border-color:var(--primary-100);
    }
`
export const ButtonText = styled.p`
    &:hover{
        text-decoration: var(--primary-100) underline;
    }
`
export const NavigationLink = styled(Link)`
    text-decoration: underline;
    color: #2F2E41;
    align-text:center;
    margin-right:80px;
`