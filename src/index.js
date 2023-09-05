import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Header from "./components/Header"
import Error from "./components/Error"
import Results from "./pages/Results"
import Freelances from "./pages/Freelances"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    div {
        font-family:'Trebuchet MS', Helvetica, sans-serif;
        padding:0;
        margin:0;
    }
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
`

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/shiny-agency" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="*" element={<Error />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
