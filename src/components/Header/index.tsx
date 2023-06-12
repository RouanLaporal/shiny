import { HeaderContainer, Logo } from "./HeaderStyle"
import logo from "../../assets/dark-logo.png"
import { StyledLink } from "../../styles/Atoms"
import { Link } from "react-router-dom"

function Header(){
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo src={logo} alt="shiny_logo"/>
            </Link>
            
            <div>
                <StyledLink to='/'>Acceuil</StyledLink>
                <StyledLink to="/freelances">
                    Profils
                </StyledLink>
                <StyledLink to='/survey/1' isFullLink>Faire le test</StyledLink>
            </div>
        </HeaderContainer>
       
    )
}

export default Header