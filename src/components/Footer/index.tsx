import { useContext } from "react"
import { ThemeContext } from "../../utils/context"
import { FooterContainer, NightModeButton } from "./FooterStyles";

function Footer(){
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;