import { useContext } from "react"
import { SurveyContext } from "../../utils/context"
import { useFetch, useTheme } from "../../utils/hooks";
import { LoaderWrapper, JobTitle, JobDescription, ResultsTitle, ResultsContainer, DescriptionWrapper } from "./ResultsStyles";
import { Loader, StyledLink } from "../../styles/Atoms";
type Answer = {
    [key: string]: boolean
}
interface Result {
    title:string;
    description: string;
}
interface ResultsData {
    resultsData: Result[];
}
export function formatQueryParams(answers:Answer):string {
    const answerNumbers = Object.keys(answers)
  
    return answerNumbers.reduce((previousParams, answerNumber, index) => {
      const isFirstParam = index === 0
      const separator = isFirstParam ? '' : '&'
      return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

export function formatJobList(title:string, listlength:number, index:number){
  if(index === listlength - 1)
    return title
  return `${title},`
}

function Results(){
    
    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    const fetchParams = formatQueryParams(answers);
    const { data, isLoading, error } = useFetch<ResultsData>(`https://shiny.herokuapp.com/results?${fetchParams}`);
    const resultsData = data?.resultsData;
    if(error) {
        return <span>Il y a un problème</span>
    }
    
    return isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <ResultsContainer theme={theme}>
          <ResultsTitle theme={theme}>
            Les compétences dont vous avez besoin :
            {resultsData &&
              resultsData.map((result, index) => (
                <JobTitle
                  key={`result-title-${index}-${result.title}`}
                  theme={theme}
                >
                  {formatJobList(result.title, resultsData.length, index)}
                  {index === resultsData.length - 1 ? '' : ','}
                </JobTitle>
              ))}
          </ResultsTitle>
          <StyledLink isFullLink to="/freelances">
            Découvrez nos profils
          </StyledLink>
          <DescriptionWrapper>
            {resultsData &&
              resultsData.map((result, index) => (
                <JobDescription
                  theme={theme}
                  key={`result-detail-${index}-${result.title}`}
                >
                  <JobTitle theme={theme}>{result.title}</JobTitle>
                  <p>{result.description}</p>
                </JobDescription>
              ))}
          </DescriptionWrapper>
        </ResultsContainer>
      )
}

export default Results