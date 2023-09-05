import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/color"
import logo from "../../assets/dark-logo.png"

const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
`

const Logo = styled.img`
    height: 70px;
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
    return (
        <HeaderStyle>
            <Logo src={logo} />
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
