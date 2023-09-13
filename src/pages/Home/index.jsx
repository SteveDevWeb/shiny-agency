import styled from "styled-components"
import colors from "../../utils/style/color"
import homeIllustration from "../../assets/home-illustration.svg"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../utils/context/index"
import { useContext } from "react"

const HomePage = styled.section`
    background: ${({ isDarkMode }) => (isDarkMode ? colors.darkModeLight : colors.backgroundLight)};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 200px);
    padding: 5% 5%;
    display: flex;
    align-items: center;
`

const Display = styled.div`
    display: flex;
    flex-direction: column;
`

const HomeTitle = styled.h1`
    font-size: 45px;
    line-height: 70px;
    font-weight: 700;
    margin-bottom: 50px;
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
    height: 350px;
`




function Home() {
    const {theme} = useContext(ThemeContext)
    return (
        <HomePage isDarkMode={theme === 'dark'}>
            <Display>
                <HomeTitle isDarkMode={theme === 'dark'}>
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
