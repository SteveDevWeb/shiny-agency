import styled from "styled-components"
import colors from "../../utils/style/color"
import homeIllustration from "../../assets/home-illustration.svg"
import { Link } from "react-router-dom"
import { useTheme } from "../../utils/hooks/index"
import { useEffect } from "react"

const HomePage = styled.section`
    background: ${({ isDarkMode }) => (isDarkMode ? colors.darkModeLight : colors.backgroundLight)};
    min-height: calc(100vh - 200px);
    padding: 5% 5%;
    display: flex;
    align-items: center;
    max-width:1400px ;
    margin:0 auto;
    @media (max-width: 768px) {
        flex-direction:column;
    }
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
    @media (max-width: 768px) {
        align-self:center;
        margin-bottom:50px;
    }
`

const HomeIllustration = styled.img`
    height: 350px;
`




function Home() {
    useEffect(() => {
        document.title = 'Accueil'; // Mettez ici le titre que vous souhaitez
      }, []);
    return (
        <HomePage isDarkMode={useTheme() === 'dark'}>
            <Display>
                <HomeTitle isDarkMode={useTheme() === 'dark'}>
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
