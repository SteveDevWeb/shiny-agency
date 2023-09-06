import styled from "styled-components"
import colors from "../../utils/style/color"
import homeIllustration from "../../assets/home-illustration.svg"
import { Link } from "react-router-dom"

const HomePage = styled.section`
    background: ${colors.backgroundLight};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 100px);
    padding: 0 5%;
    display: flex;
    align-items: center;
`

const Display = styled.div`
    display: flex;
    flex-direction: column;
`

const HomeTitle = styled.h1`
    font-size: 50px;
    line-height: 80.25px;
    font-weight: 700;
    color: #2f2e41;
    margin-bottom:50px;
`

const StyledLink = styled(Link)`
    width: fit-content;
    padding: 8px 50px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HomeIllustration = styled.img`
    height: 506px;
`

function Home() {
    return (
        <HomePage>
            <Display>
                <HomeTitle>
                    Repérez vos besoins, on s’occupe du reste, avec les
                    meilleurs talents
                </HomeTitle>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </Display>
            <HomeIllustration src={homeIllustration} alt="" />
        </HomePage>
    )
}

export default Home
