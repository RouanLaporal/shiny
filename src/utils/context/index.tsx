import { createContext, useState } from "react";

type IThemeContext = {
    theme:string,
    toggleTheme : () => void
}

export const ThemeContext = createContext<IThemeContext>({
    theme:'',
   toggleTheme: () => null
})

export const ThemeProvider = ({ children }:{children : React.ReactNode}) => {
    
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