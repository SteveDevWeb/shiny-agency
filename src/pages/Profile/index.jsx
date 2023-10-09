import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Profile() {
    let idProfile = useParams()

    const [profileData, setProfileData] = useState({})
    const [error, setError] = useState(false)
    const [isDataLoading, setDataLoading] = useState(false)

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
            } finally {
            }
        }
        fetchProfile()
    }, [])

    return (
        <div>   
            <img src={`${profileData.picture}`} alt="profilePicture"></img>
            {`nom : ${profileData.name}`} <br></br>
            {`dispo : ${profileData.available}`}
            <br></br>
            {`métier : ${profileData.job}`}
            <br></br>
            {`Lieu : ${profileData.location}`}
            <br></br>
            {`Taux Journalier Moyen : ${profileData.tjm}€`}
            <br></br>
            {`Compétences : ${profileData.skills}`}

        </div>
    )
}
