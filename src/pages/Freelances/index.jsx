import Card from "../../components/Card"
import styled from "styled-components"
import colors from "../../utils/style/color"
import { useEffect, useState } from "react"
import Loader from "../../utils/Atom"


//Style
const Display = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height:calc(100vh - 200px);
    max-width:1400px;
    margin:0 auto;
`

const H1 = styled.h1`
    margin: 50px 0 50px 0;
    font-weight: 700;
    font-size: 30px;
    align-items: center;
    text-align: center;
`

const H2 = styled.h1`
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 50px;
    text-align: center;
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    width: 100%;
    padding: 30px;
`

export default function Freelances() {
    const [freelancesData, setFreelancesData] = useState([])
    const [error, setError] = useState(false)
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(() => {
        async function fetchFreelancers() {
            setDataLoading(true)
            try {
                const response = await fetch(`http://localhost:8000/freelances`)
                const freelancesDataResponse = await response.json()

                setFreelancesData(freelancesDataResponse.freelancersList)
            } catch (err) {
                console.log("===== error =====", err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchFreelancers()
    }, [])

    const Error = styled.span`
        display: block;
        text-align: center;
    `
    useEffect(() => {
        document.title = 'Freelances'; // Mettez ici le titre que vous souhaitez
      }, []);

    return (
        <Display>
            <H1>Trouvez votre prestataire</H1>
            <H2>Chez Shiny nous réunissons les meilleurs profils pour vous.</H2>
            {error ? (
                <Error>Oups, une erreur est survenue...</Error>
            ) : isDataLoading ? (
                <Loader />
            ) : (
                <CardsContainer>
                    {freelancesData.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.job}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
            )}
        </Display>
    )
}
