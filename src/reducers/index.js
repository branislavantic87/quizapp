import { combineReducers } from 'redux';
import QuestionsReducer from './QuestionsReducer';


export default combineReducers({
    questions: QuestionsReducer
})