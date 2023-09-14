import { ThemeContext } from "../../utils/context/index"
import { useContext } from "react"

export function useTheme() {
    const {theme} = useContext(ThemeContext)
    return  theme 
  }

