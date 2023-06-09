import { FooterContainer, NightModeButton } from "./FooterStyles";
import { useTheme } from "../../utils/hooks";

function Footer(){
    const { toggleTheme, theme } = useTheme();
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer;