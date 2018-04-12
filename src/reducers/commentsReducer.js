import comments from '../data/comments.json';
import * as constants from '../constants/';

const initialState = {
	comments,
	text: '',
};

export function commentsReducer(state = initialState, action) {
	switch (action.type) {
		case constants.COMMENTS_CLEAR:
			return {
				...state,
				comments: [],
			};
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
			let nextCommentId = null;
			let maxId = Math.max(
				...stateCopy.comments.map(comment => comment.id)
			);

			if (stateCopy.comments.length) {
				nextCommentId = maxId + 1;
			} else {
				nextCommentId = 0;
			}

			stateCopy.comments.unshift({
				id: nextCommentId,
				text: action.payload.text,
				votes: 0,
			});

			return {
				...state,
				comments: stateCopy.comments,
				text: '',
			};
		case constants.COMMENT_THUMB_UP:
			let newStateThumbUp = state.comments.map(
				comment =>
					comment.id === action.payload.commentId
						? {
								...comment,
								votes: comment.votes + 1,
							}
						: comment
			);
			return {
				...state,
				comments: newStateThumbUp,
			};
		case constants.COMMENT_THUMB_DOWN:
			let newStateThumbDown = state.comments.map(
				comment =>
					comment.id === action.payload.commentId
						? {
								...comment,
								votes: comment.votes - 1,
							}
						: comment
			);
			return {
				...state,
				comments: newStateThumbDown,
			};
		case constants.COMMENTS_CLEAR_INPUT:
			return {
				...state,
				text: '',
			};
		default:
			return state;
	}
}
