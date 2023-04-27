import styled from "styled-components"

export const CardLabel = styled.p`
    color: #5843e4;
    font-size: 22px;
    padding-left:15px;
    &:hover{
        text-decoration:underline var(--primary-100);
    }
`

export const CardTitle = styled.span`
    margin-top:31px;
    &:hover{
        text-decoration: underline var(--primary-100);
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CardImage = styled.img`
    height: 148px;
    width: 148px;
    border-radius: 50%;
    &:hover{
        border: var(--primary-100) 2px solid;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: var(--background-light);
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
        border: var(--primary-100) 2px solid;
    }
`