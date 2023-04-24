import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.png'
import CardsContainer from './FreelancesStyles'

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
        <div>
            <h1>Freelance 👩‍💻👨‍💻👩‍💻</h1>
            <CardsContainer>
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
            </CardsContainer>
        </div>
    )
}

export default Freelances