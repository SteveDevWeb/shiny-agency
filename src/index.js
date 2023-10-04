import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Results from "./pages/Results"
import Freelances from "./pages/Freelances"
import Profile from "./pages/Profile"
import {ThemeProvider, SurveyProvider} from "./utils/context/index"
import GlobaleStyle from "./utils/style/GlobaleStyle"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobaleStyle />
                    <Header />
                    <Routes>
                        <Route path="/shiny-agency" element={<Home />} />
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        />
                        <Route path="*" element={<Error />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
