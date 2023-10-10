import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem("Theme")
    const [theme, setTheme] = useState(
        savedTheme ? JSON.parse(savedTheme) : "dark"
    )

    useEffect(() => {
        localStorage.setItem("Theme", JSON.stringify(theme))
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
    const savedAnswers = localStorage.getItem("Answers")
    const [answers, setAnswers] = useState(
        savedAnswers ? JSON.parse(savedAnswers) : {}
    )

    useEffect(() => {
        localStorage.setItem("Answers", JSON.stringify(answers))
    }, [answers])

    
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers })
    }

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}
