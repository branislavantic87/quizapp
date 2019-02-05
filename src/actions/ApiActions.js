import { QUESTIONS, LOADING_FOR_QUESTIONS } from './types';


export const fetchQuestions = () => {
    return async dispatch => {
        dispatch({ type: LOADING_FOR_QUESTIONS, payload: true })
        let questions = await fetch('https://opentdb.com/api.php?amount=10').then(res => res.json())
        dispatch({ type: QUESTIONS, payload: questions.results })
        dispatch({ type: LOADING_FOR_QUESTIONS, payload: false })
    }
}