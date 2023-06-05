import { useParams } from "react-router-dom";
import * as Style from "./SurveyStyles"
import { useContext, useState } from "react";
import { Loader } from "../../styles/Atoms";
import { SurveyContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks";

type SurveyParams = {
    questionNumber:string;
};

interface Survey {
    surveyData: {
        [key: string]: string | undefined
    }
};


function Survey(){
    const { questionNumber = '1' } = useParams<SurveyParams>();
    const questionNumberInt = parseInt(questionNumber);
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestion = questionNumberInt +1
    const {saveAnswers, answers} = useContext(SurveyContext);
    const { data, isLoading, error } = useFetch<Survey>(`http://localhost:8000/survey`);
    console.log(data);
    const  surveyData  = data?.surveyData;
    function saveReply(answer:boolean) {
        saveAnswers({ [questionNumber]: answer})
    }

    if(error)
        return <span>Oups il y a un problème...</span>
    return (
        <Style.SurverContainer>
            <Style.QuestionContainer>
                <Style.QuestionTitle>Question {questionNumber}</Style.QuestionTitle>
                {isLoading 
                    ? (<Loader/>)
                    : <p>{ surveyData && surveyData[questionNumber]}</p>
                }
            </Style.QuestionContainer>
            { answers &&
                <Style.AnswerContainer>
                    <Style.ButtonContainer
                        onClick={() => saveReply(true)}
                        isSelected={ answers[questionNumber]===true }
                    >
                        <Style.ButtonText>
                            Oui
                        </Style.ButtonText>
                    </Style.ButtonContainer>
                    <Style.ButtonContainer
                        onClick={() => saveReply(false)}
                        isSelected={ answers[questionNumber]===false }
                    >
                        <Style.ButtonText>
                            Non
                        </Style.ButtonText>
                    </Style.ButtonContainer>
                </Style.AnswerContainer>
            }
            
            
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