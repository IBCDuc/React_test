import { createContext, useState } from "react";
const Context = createContext()
function ThemeContext( {children} ) {
    
    const [theme, settheme] = useState('dark')
    const handlerClick = () => {
        if (theme == 'dark') {
            settheme('light')
        } else {
            settheme('dark')
        }
    } 

    const Attr = {
        theme,
        handlerClick
    }

    return (
        <Context.Provider value = {Attr}>
            {children}
        </Context.Provider>
    )
}

export  {ThemeContext, Context}