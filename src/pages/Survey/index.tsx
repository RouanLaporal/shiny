import { Link, useParams } from "react-router-dom";

function Survey(){
    const { questionNumber } = useParams()
    const questionNumberInt = questionNumber !== undefined ? parseInt(questionNumber) : 1
    const previousQuestion = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestion = questionNumberInt +1
    return (
        <div>
            <h1>Questionnaire</h1>
            <Link to={`/survey/${previousQuestion}`}>précedent</Link>
            <h2>Question {questionNumber}</h2>
            {
                questionNumberInt === 10 ? (<Link to='/results'>Résultats</Link>) : (<Link to={`/survey/${nextQuestion}`}>suivant</Link>)
            }
        </div>
    )
}

export default Survey;