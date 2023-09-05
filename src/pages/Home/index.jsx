import styled from "styled-components"
import colors from "../../utils/style/color"
import homeIllustration from "../../assets/home-illustration.svg"

const HomePage = styled.section`
    background: ${colors.backgroundLight};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 100px);
    padding: 0 5%;
    display:flex;
    align-items:center;
`

const Display = styled.div`
    display:flex;
`

const HomeTitle=styled.h1`
    font-size:50px;
    line-height:80.25px;
    font-weight:700;
    color:#2F2E41;
`
const HomeIllustration = styled.img`
    height:506px;
`

function Home() {
    return (
        <HomePage>
            <Display>
                <HomeTitle>Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents</HomeTitle>
                
            </Display>
            <HomeIllustration src={homeIllustration} alt="" />
            
        </HomePage>
    )
}

export default Home
