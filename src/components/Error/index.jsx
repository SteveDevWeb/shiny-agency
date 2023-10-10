import colors from "../../utils/style/color"
import styled from "styled-components"
import errorIllustration from "../../assets/404.svg"
import { ThemeContext } from "../../utils/context/index"
import { useContext } from "react"

const Display = styled.section`
    background-color: ${({ isDarkMode }) =>
        isDarkMode ? colors.darkModeLight : colors.backgroundLight};
    margin-left: clamp(10px, 5%, 65px);
    margin-right: clamp(10px, 5%, 65px);
    min-height: calc(100vh - 200px);
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ErrorText = styled.span`
    text-align: center;
    font-weight: 700;
    font-size: 31px;
`

const ErrorIllustration = styled.img`
    width: 90%;
    max-width:300px;
    margin: 40px 0;
`

function Error() {
    const { theme } = useContext(ThemeContext)

    return (
        <Display isDarkMode={theme === "dark"}>
            <ErrorText>Oups...</ErrorText>
            <ErrorIllustration src={errorIllustration} />
            <ErrorText>Il semblerait qu’il y ait un problème</ErrorText>
        </Display>
    )
}

export default Error
