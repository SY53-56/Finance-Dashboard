import { createContext, useState } from "react";


 export const ThemeContext = createContext()

 export const ThemeProvider = ({children})=>{
    const [theme ,setTheme] = useState("light")
    const handleTheme= ()=>{
        setTheme((prev)=> prev=== "light"?"dark":"light")
    }
   return (
    <ThemeContext.Provider value={{setTheme , handleTheme , theme}}>
{children}
    </ThemeContext.Provider>
   )
}