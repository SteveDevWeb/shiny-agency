import { useContext } from 'react'
import { ThemeContext } from '../context/index'
import { createGlobalStyle } from "styled-components"
import colors from "../style/color"

const StyledGlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        color:${({ isDarkMode }) => (isDarkMode ? 'white' : colors.darkModeDark)};
    }
    body{
        background-color: ${({ isDarkMode }) => (isDarkMode ? colors.darkModeDark : 'white')};
        margin: 0; 
    }
   
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle


