import styled from "styled-components"
import colors from "../../utils/style/color"

const HomePage = styled.section`
    background: ${colors.backgroundLight};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 100px);
`

function Home() {
    return (
        <HomePage>
            <h1> Page d'accueil 🏠</h1>
        </HomePage>
    )
}

export default Home
