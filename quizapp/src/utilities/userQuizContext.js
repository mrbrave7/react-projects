/* eslint-disable no-unused-vars */
import { createContext,useContext } from "react";

const gameContext = createContext({
    allQuizQuestion:[],
    playerName:"",
    singleQuestion:{},
    setSingleQuizQuestion:(singleQuizQuestion) => {},
    startGame:(playerName,singleQuizQuestion) => {},
    rightQuizQuestions: [],
    setRightQuizQuestions:(singleQuizQuestion) => {},
    wrongQuizQuestions:[],
    setWrongQuizQuestions:(singleQuizQuestion) => {},
    exitGame:() => {}
})

export const useGame = () => {
    return useContext(gameContext)
}

export const Gameprovider = gameContext.Provider