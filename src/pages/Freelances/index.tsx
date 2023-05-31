import Card from '../../components/Card'
import { ProfileContainer, FreelanceWrapper, Subtitle, PageTitle, LoaderWrapper } from './FreelancesStyles'
import { useEffect, useState } from 'react'
import { Loader } from '../../styles/Atoms';
interface FreelancerProfile {
  id:string;
  name:string;
  job:string;
  picture:string;
};

function Freelances(){
  const [isDataLoading, setDataLoading] = useState(false)
  const [freelancersList, setFreelancersList] = useState<Array<FreelancerProfile>>([])
  const [error, setError] = useState(false)
  
  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList }= await response.json()
        setFreelancersList(freelancersList)
      } catch (error) {
        console.log(error)
        setError(true)
      }finally{
        setDataLoading(false)
      }
    }
    fetchFreelance()
  },[]) 
    if(error)
      return <span> Oups il y  a un problème...</span>
    return (
        <FreelanceWrapper>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            <ProfileContainer>
                {isDataLoading 
                  ? <LoaderWrapper>
                      <Loader/>
                    </LoaderWrapper>
                  : freelancersList.map(((profile, index) => (
                        <Card
                            key={profile.id}
                            label={profile.job}
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