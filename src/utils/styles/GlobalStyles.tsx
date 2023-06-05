import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context"

const StyledGlobalStyle= createGlobalStyle<{ isDarkMode: boolean}>`
:root{
    --primary-100: #5843E4;
    --secondary-100: #8186A0;
    --background-light: #F9F9FC;
}

div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
}

body{
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
}
`
function GlobalStyles() {
    const { theme } = useContext(ThemeContext);
    return <StyledGlobalStyle  isDarkMode={theme === 'dark'} />
}

export default GlobalStyles;