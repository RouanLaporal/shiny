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
export const ButtonContainer = styled.div<{isSelected:boolean}>`
    display:flex;
    border: 2px;
    border-radius: 31px;
    width:291px;
    height:96px;
    justify-content:center;
    align-items:center;
    margin: 63px 42px 63px;
    background-color: var(--background-light);
    box-shadow: ${(props) =>
        props.isSelected ? `0px 0px 0px 2px var(--primary-100) inset` : 'none'};
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