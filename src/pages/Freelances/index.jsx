import DefaultPicture from "../../assets/profile.png"
import Card from "../../components/Card"
import styled from "styled-components"
import colors from "../../utils/style/color"

const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "Devops",
        picture: DefaultPicture,
    },
    {
        name: "John Doe",
        jobTitle: "Developpeur FrontEnd",
        picture: DefaultPicture,
    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse Fullstack",
        picture: DefaultPicture,
    },
    {
        name: "Eric Zarma",
        jobTitle: "Développeur BackEnd",
        picture: DefaultPicture,
    }
]




const Display = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const H1 = styled.h1`
    margin:50px 0 50px 0;
    font-weight:700;
    font-size:30px;
    align-items:center;
    text-align:center;
`

const H2 = styled.h1`
    color:${colors.secondary};
    font-weight:700;
    font-size:20px;
    margin-bottom:50px;
    text-align:center;
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    width:100%;
    padding:30px;
`

export default function Freelances() {
    return (
        <Display>
            <H1>Trouvez votre prestataire</H1>
            <H2>Chez Shiny nous réunissons les meilleurs profils pour vous.</H2>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </Display>
    )
}
