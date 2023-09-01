import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Survey() {
    let questionNumber = useParams()
    const currentQuestionNumber = parseInt(questionNumber.questionNumber)
    console.log(currentQuestionNumber)
    const nextQuestionNumber = currentQuestionNumber + 1
    const previousQuestionNumber =
        currentQuestionNumber === 1 ? 1 : currentQuestionNumber - 1

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {currentQuestionNumber}</h2>
            <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
            {currentQuestionNumber === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            )}
        </div>
    )
}

export default Survey
