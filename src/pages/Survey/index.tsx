import { useParams } from "react-router-dom";
import * as Style from "./SurveyStyles"
import { useEffect, useState } from "react";
import { Loader } from "../../styles/Atoms";

type SurveyParams = {
    questionNumber:string;
};

interface Map {
    [key: string]: string | undefined
};
function Survey(){
    const { questionNumber = '1' } = useParams<SurveyParams>();
    const questionNumberInt = parseInt(questionNumber);
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestion = questionNumberInt +1
    const [surveyData, setSurveyData] = useState<Map>({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {    
        async function fetchSurvey(){
            setDataLoading(true)
            try{
                const response = await fetch(`http://localhost:8000/survey`)
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            }catch(error){
                console.log(error)
                setError(true)
            }finally{
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    if(error)
        return <span>Oups il y a un problème...</span>
    return (
        <Style.SurverContainer>
            <Style.QuestionContainer>
                <Style.QuestionTitle>Question {questionNumber}</Style.QuestionTitle>
                {isDataLoading 
                    ? (<Loader/>)
                    : <p>{ surveyData[questionNumber]}</p>
                }
            </Style.QuestionContainer>
            <Style.AnswerContainer>
                <Style.ButtonContainer>
                    <Style.ButtonText>Oui</Style.ButtonText>
                </Style.ButtonContainer>
                <Style.ButtonContainer>
                    <Style.ButtonText>Non</Style.ButtonText>
                </Style.ButtonContainer>
            </Style.AnswerContainer>
            
            
            <div>
                <Style.NavigationLink to={`/survey/${previousQuestion}`}>précedent</Style.NavigationLink>
                {
                    questionNumberInt === 10 ? (<Style.NavigationLink to='/results'>Résultats</Style.NavigationLink>) : (<Style.NavigationLink to={`/survey/${nextQuestion}`}>suivant</Style.NavigationLink>)
                }
            </div>           
        </Style.SurverContainer>
    )
}

export default Survey;