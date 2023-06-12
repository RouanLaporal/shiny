import HomeIllustration from "../../assets/home-illustration.svg"
import { StyledLink } from "../../styles/Atoms"
import { HomeContainer, HomeTitle, HomeWrapper, Illustration, LeftColumn } from "./HomeStyles"
function Home() {
  return (
    <div>
      <HomeWrapper>
        <HomeContainer>
         <LeftColumn> 
            <HomeTitle>Repérez vos besoins,on s’occupe du reste, avec les meilleurs talents</HomeTitle>
            <StyledLink to='/survey/1' isFullLink>Faire le test</StyledLink>
         </LeftColumn>
          <Illustration src={HomeIllustration} alt="home-illustration"/>
        </HomeContainer>
      </HomeWrapper>
    </div>
  )
}

export default Home