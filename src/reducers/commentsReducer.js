import comments from '../data/comments.json';
import * as constants from '../constants/';

const initialState = {
	comments,
	text: '',
};

export function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case constants.COMMENT_REMOVE:
			const id = action.payload.commentId;
			const filteredComments = state.comments.filter(
				comment => comment.id !== id
			);
			return {
				...state,
				comments: filteredComments,
			};

		case constants.COMMENT_FIELD_CHANGE:
			const value = action.payload.value;
			return {
				...state,
				text: value,
			};
		case constants.COMMENT_ADD:
			const stateCopy = { ...state };
			const maxId = Math.max(
				...stateCopy.comments.map(comment => comment.id)
			);

			stateCopy.comments.unshift({
				id: maxId + 1,
				text: action.payload.text,
				votes: 0,
			});

			return {
				...state,
				comments: stateCopy.comments,
				text: '',
			};

		default:
			return state;
	}
}
