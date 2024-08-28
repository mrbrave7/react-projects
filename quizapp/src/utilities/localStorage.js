export const saveQuizState = (state) => {
    try {
        const quizState = JSON.stringify(state);
        localStorage.setItem("quizState", quizState);
    } catch (error) {
        console.log("Can't Save State", error);
    }
};

export const initialQuizState = () => {
    try {
        const quizState = localStorage.getItem("quizState");
        if (quizState === null) {
            return {
                playerName: "",
                rightQuizQuestions: [],
                wrongQuizQuestions: [],
                singleQuestion: {},
            };
        }
        const parsedState = JSON.parse(quizState);
        return {
            playerName: parsedState.playerName || "",
            rightQuizQuestions: parsedState.rightQuizQuestions || [],
            wrongQuizQuestions: parsedState.wrongQuizQuestions || [],
            singleQuestion: parsedState.singleQuestion || {},
        };
    } catch (error) {
        console.log("Error retrieving quiz state:", error);
        return {
            playerName: "",
            rightQuizQuestions: [],
            wrongQuizQuestions: [],
            singleQuestion: {},
        };
    }
};

