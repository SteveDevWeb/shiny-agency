import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/color"
import { useEffect, useState, useContext } from "react"
import Loader from "../../utils/Atom"
import { SurveyContext, ThemeContext } from "../../utils/context"

//Style
const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 200px);
    max-width: 1400px;
    margin: 0 auto;
`

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
    margin: 30px;
`

const LinkWrapper = styled.div`
    padding-top: 30px;
    & a:first-of-type {
        margin-right: 20px;
    }
`

const ReplyBox = styled.button`
    border: none;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.darkModeLight : colors.backgroundLight};

    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${(props) =>
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
`

const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber =
        questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1

    const { saveAnswers, answers } = useContext(SurveyContext)

    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
    }

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.title = "Votre test" // Mettez ici le titre que vous souhaitez
    }, [])

    // useEffect(() => {
    //     setDataLoading(true)
    //     fetch(`http://localhost:8000/survey`)
    //         .then((response) => response.json())
    //         .then(({ surveyData }) => {
    //             setSurveyData(surveyData)
    //             setDataLoading(false)
    //         })
    // }, [])

    const [surveyData, setSurveyData] = useState({})
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchSurvey() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/survey`)
                const { surveyData } = await response.json()
                setSurveyData(surveyData)
            } catch (err) {
                console.log("===== error =====", err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchSurvey()
    }, [])

    const Error = styled.span`
        display: block;
        text-align: center;
    `
    if (error) {
        return <Error>Oups, une erreur est survenue...</Error>
    }

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isDataLoading ? (
                <Loader />
            ) : (
                <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
            )}
            {answers && (
                <ReplyWrapper>
                    <ReplyBox
                        isDarkMode={theme === "dark"}
                        onClick={() => saveReply(true)}
                        isSelected={answers[questionNumber] === true}
                    >
                        Oui
                    </ReplyBox>
                    <ReplyBox
                        isDarkMode={theme === "dark"}
                        onClick={() => saveReply(false)}
                        isSelected={answers[questionNumber] === false}
                    >
                        Non
                    </ReplyBox>
                </ReplyWrapper>
            )}
            <LinkWrapper>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey
