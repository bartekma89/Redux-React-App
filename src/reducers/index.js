import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer.js';

const rootReducer = combineReducers({
	commentsStore: commentsReducer,
});

export default rootReducer;
