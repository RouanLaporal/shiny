import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'
import { ProfileContainer, FreelanceWrapper, Subtitle, PageTitle } from './FreelancesStyles'

function Freelances(){
  const freelanceProfiles = [
        {
          name: 'Jane Doe',
          jobTitle: 'Devops',
          picture: DefaultPicture,
        },
        {
          name: 'John Doe',
          jobTitle: 'Developpeur frontend',
          picture: DefaultPicture,
        },
        {
          name: 'Jeanne Biche',
          jobTitle: 'Développeuse Fullstack',
          picture: DefaultPicture,
        },
      ]
    return (
        <FreelanceWrapper>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            <ProfileContainer>
                {
                    freelanceProfiles.map(((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    )))
                }
            </ProfileContainer>
        </FreelanceWrapper>
    )
}

export default Freelances