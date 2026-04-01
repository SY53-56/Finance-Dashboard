import { createContext, useState } from "react";


 export const AppContext = createContext()


 export const AppContextProvider = ({children})=>{
    const [transitions, setTransitions] = useState(6)
    const [role ,setRole] = useState("viewer")

        return(
 <AppContext.Provider value={{transitions, setTransitions , role, setRole}}>
{children}
 </AppContext.Provider>
        )
    
}