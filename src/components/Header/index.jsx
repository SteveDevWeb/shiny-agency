import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/color"
import darkLogo from "../../assets/dark-logo.png"
import lightLogo from "../../assets/light-logo.png"
import { ThemeContext } from "../../utils/context"
import { useContext } from "react"

const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    position:sticky;
    top:0;
    background:${({ isDarkMode }) => (isDarkMode ? colors.darkModeDark : 'white')};
    @media (max-width: 768px) {
        justify-content:center;
        padding:10px;
    }
`

const Logo = styled.img`
    height: 70px;
    @media (max-width: 768px) {
        display:none;    
    }
`

const StyledLink = styled(Link)`
    padding: 8px 25px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
    const { theme } = useContext(ThemeContext)
    return (
        <HeaderStyle isDarkMode={theme === 'dark'}>
            <Logo src={theme === "light" ? darkLogo : lightLogo} />
            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </nav>
        </HeaderStyle>
    )
}

export default Header
