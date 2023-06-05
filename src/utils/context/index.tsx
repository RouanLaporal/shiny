import { createContext, useState } from "react";

type IThemeContext = {
    theme:string,
    toggleTheme : () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme:'',
   toggleTheme: () => null
})

export const ThemeProvider = ({ children }:{ children : React.ReactNode }) => {
    
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

type Answer = {
    [key: string]: boolean
}

type ISurveyContext = {
    answers: Answer,
    saveAnswers: (newAnswers:Answer) => void
}

export const SurveyContext = createContext<ISurveyContext>({
    answers:{},
    saveAnswers: () => null
});

export const SurveyProvider = ({ children }:{ children: React.ReactNode }) => {
    const [answers, setAnswer] = useState<Answer>({})
    const saveAnswers = (newAnswers: Answer) => {
        setAnswer({ ...answers, ...newAnswers })
    }

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers}}>
            { children }
        </SurveyContext.Provider>
    )
}