/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const userContext = createContext({
    user:{
        name:"Pawan Kumar",
        image:"...",
        salary:45000
    },
    transactions:[
        {
            id:Date.now(),
            transactionType:"expense",
            transactionAmount:45000,
            transactionName:"Home Rent",
            transactionRemarks:"This Is The Remarks Of Transaction"
        }
    ],
    addUser:(user) => {},
    deleteUser:(user) => {},
    alterUser:(name) => {},
    addTransaction:(transaction) => {},
    alterTransaction:(id,transaction) => {},
    deleteTransaction:(id) => {}
});

export const useUser = () => {
    return useContext(userContext)
}

export const userProvider = userContext.Provider