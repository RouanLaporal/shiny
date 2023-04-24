import styled from "styled-components"
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