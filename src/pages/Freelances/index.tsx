import Card from '../../components/Card';
import { ProfileContainer, FreelanceWrapper, Subtitle, PageTitle, LoaderWrapper } from './FreelancesStyles';
import { Loader } from '../../styles/Atoms';
import { useFetch } from '../../utils/hooks';
interface FreelancerProfile {
  id:string;
  name:string;
  job:string;
  picture:string;
};

interface FreelancersList {
  freelancersList: FreelancerProfile[]
};

function Freelances(){
  const { data, isLoading, error } = useFetch<FreelancersList>(`https://shiny.herokuapp.com/freelances`);
  const freelancersList  = data?.freelancersList;
    if(error)
      return <span> Oups il y  a un problème...</span>;
    return (
        <FreelanceWrapper>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            <ProfileContainer>
                {isLoading 
                  ? <LoaderWrapper>
                      <Loader/>
                    </LoaderWrapper>
                  : freelancersList?.map(((profile, index) => (
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