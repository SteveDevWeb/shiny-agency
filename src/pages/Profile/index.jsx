import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../utils/Atom"
import styled from "styled-components"
import { ThemeContext } from "../../utils/context/index"
import { useContext } from "react"
import colors from "../../utils/style/color"

const Display = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 200px);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 5%;
`
const ProfileDisplay = styled.div`
    background: red;
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.darkModeLight : colors.backgroundLight};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`

const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    justify-content:center;
`
const ProfileImg = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    @media (max-width: 768px) {
        align-self: center;
    }
`

const ProfileName = styled.span`
    font-size: 30px;
`
const ProfileAvailable = styled.span`
    font-size: 15px;
`
const ProfileJob = styled.span`
    font-size: 20px;
`
const ProfileLocation = styled.span``

const ProfilePrice = styled.span`
    font-size: 25px;
`
const ProfileSkills = styled.ul`
    list-style-type: none;
    display: flex;
    gap:6px;
    flex-wrap:wrap;
`
const Skill = styled.li`
    border-radius: 8px;
    padding: 5px 10px;
    border: ${({ isDarkMode }) =>
        isDarkMode ? "1.5px solid white" :"1.5px solid black" };
`

export default function Profile() {
    let idProfile = useParams()

    const [profileData, setProfileData] = useState({})
    const [error, setError] = useState(false)
    const [isDataLoading, setDataLoading] = useState(false)

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchProfile() {
            setDataLoading(true)
            try {
                const response = await fetch(
                    `http://localhost:8000/freelance?id=${idProfile.id}`
                )
                const profileDataResponse = await response.json()
                setProfileData(profileDataResponse.freelanceData)
                console.log(profileDataResponse.freelanceData)
            } catch (err) {
                console.log("===== error =====", err)
                setError(true)
            } finally {
                setDataLoading(false)
            }
        }
        fetchProfile()
    }, [idProfile.id])

    const Error = styled.span`
        display: block;
        text-align: center;
    `

    return (
        <Display>
            {error ? (
                <Error>Oups, une erreur est survenue...</Error>
            ) : isDataLoading ? (
                <Loader />
            ) : (
                <ProfileDisplay isDarkMode={theme === "dark"}>
                    <ProfileImg
                        src={`${profileData.picture}`}
                        alt="profilePicture"
                    ></ProfileImg>
                    <ProfileDetails>
                        <ProfileName>{profileData.name}</ProfileName>
                        <ProfileLocation>
                            {`📍 ${profileData.location}`}
                        </ProfileLocation>

                        <ProfileJob>{`${profileData.job}`}</ProfileJob>
                        <ProfileSkills>
                            {profileData.skills && profileData.skills.map((element, index) => (
                                <Skill key={index} isDarkMode={theme === "dark"}>{element}</Skill>
                            ))}
                        </ProfileSkills>

                        <ProfileAvailable>
                            {profileData.available
                                ? `🟢  Disponile maintenant`
                                : `🔴  Indisponible pour le moment`}
                        </ProfileAvailable>

                        <ProfilePrice>
                            {`${profileData.tjm}€ / jour`}
                        </ProfilePrice>
                    </ProfileDetails>
                </ProfileDisplay>
            )}
        </Display>
    )
}
