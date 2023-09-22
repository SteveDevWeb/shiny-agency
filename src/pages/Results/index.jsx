import { useContext, useEffect, useState } from "react"
import { SurveyContext } from "../../utils/context/index"
import styled from "styled-components"
import Loader from "../../utils/Atom"
import { ThemeContext } from "../../utils/context/index"
import { Link } from "react-router-dom"
import colors from "../../utils/style/color"
import homeIllustration from "../../assets/home-illustration.svg"


const StyledLink = styled(Link)`
    padding: 8px 25px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const ResultsContainer = styled.div`
    padding:50px 0px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 200px);
    max-width: 1400px;
    background: ${({ isDarkMode }) =>
        isDarkMode ? "none" : colors.backgroundLight};
`

const ResultsTitle = styled.h2`
    margin: 40px 0;
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
`

const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.span`
    text-transform: capitalize;
`

const JobDescription = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
    & > p {
        margin-block-start: 5px;
    }
    & > span {
        font-size: 25px;
    }
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`


const HomeIllustration = styled.img`
    height: 350px;
    margin-top:50px;
`


export function formatQueryParams(answers) {
    const answerNumbers = Object.keys(answers)

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? "" : "&"
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, "")
}

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    } else {
        return `${title},`
    }
}

function Results() {
    useEffect(() => {
        document.title = "Vos Résultats" // Mettez ici le titre que vous souhaitez
    }, [])

    const { theme } = useContext(ThemeContext)
    const { answers } = useContext(SurveyContext)
    console.log("answers : ")
    console.log(answers)
    const queryParams = formatQueryParams(answers)

    const [resultsDataFetch, setResultsDataFetch] = useState([])
    const [error, setError] = useState(false)
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        async function fetchResults() {
            setDataLoading(true)
            try {
                const response = await fetch(
                    `http://localhost:8000/results?${queryParams}`
                )
                const resultsDataResponse = await response.json()
                setResultsDataFetch(resultsDataResponse)
            } catch (error) {
                console.log("===== error =====", error)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchResults()
    }, [queryParams])

    const Error = styled.span`
        display: block;
        text-align: center;
    `

    if (error) {
        return <Error>Il y a un problème...</Error>
    }
    const resultsData = resultsDataFetch?.resultsData

    if (Object.keys(answers).length === 0 && answers.constructor === Object) {
        return (
            <ResultsContainer isDarkMode={theme === "dark"}>
                <ResultsTitle>
                    Découvrez les compétences dont vous avez besoin 💻
                </ResultsTitle>
                <StyledLink $isFullLink to="/survey/1">
                    Faire le test
                </StyledLink>
                <HomeIllustration src={homeIllustration} alt="" />
            </ResultsContainer>
        )
    }
    return isDataLoading ? (
        <LoaderWrapper>
            <Loader />
        </LoaderWrapper>
    ) : (
        <ResultsContainer isDarkMode={theme === "dark"}>
            <ResultsTitle>
                Les compétences dont vous avez besoin&nbsp;:<br></br>
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobTitle key={`result-title-${index}-${result.title}`}>
                            {formatJobList(
                                result.title,
                                resultsData.length,
                                index
                            )}
                        </JobTitle>
                    ))}
            </ResultsTitle>
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledLink>
            <DescriptionWrapper>
                {resultsData &&
                    resultsData.map((result, index) => (
                        <JobDescription
                            key={`result-detail-${index}-${result.title}`}
                        >
                            <JobTitle>{result.title}</JobTitle>
                            <p>{result.description}</p>
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Results
