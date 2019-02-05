import { QUESTIONS, LOADING_FOR_QUESTIONS } from '../actions/types';

const initialState = { questions: [], loading: false }


export default (state = initialState, action) => {
    switch (action.type) {
        case QUESTIONS:
            return { ...state, questions: action.payload };
            break;
        case LOADING_FOR_QUESTIONS:
            return { ...state, loading: action.payload };
            break;
        default:
            return { ...state }
    }
}
