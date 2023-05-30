import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom";

interface propsHeader{
    isFullLink?: boolean
}

export const StyledLink = styled(Link)`
    padding: 15px;
    color: var(--secondary-100);
    text-decoration: none;
    font-size: 18px;
    ${(props:propsHeader) => 
        props.isFullLink && `color: white; border-radius: 30px; background-color: var(--primary-100);`

    }
`

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    padding: 10px;
    border: 6px solid var(--primary-100);
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`

