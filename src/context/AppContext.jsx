import { createContext, useState } from "react";
import { transactionsData } from "../data/data";


 export const AppContext = createContext()


 export const AppContextProvider = ({children})=>{
    const [transactions, setTransactions] = useState(transactionsData)
    const [role ,setRole] = useState("viewer")

        return(
 <AppContext.Provider value={{transactions, setTransactions , role, setRole}}>
{children}
 </AppContext.Provider>
        )
    
}