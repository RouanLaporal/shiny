import { useParams } from "react-router-dom";
import * as Style from "./SurveyStyles"
function Survey(){
    const { questionNumber } = useParams()
    const questionNumberInt = questionNumber !== undefined ? parseInt(questionNumber) : 1
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestion = questionNumberInt +1
    return (
        <Style.SurverContainer>
            <Style.QuestionContainer>
                <Style.QuestionTitle>Question {questionNumber}</Style.QuestionTitle>
                <p>Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?</p>
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