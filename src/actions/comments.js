import * as constants from '../constants/';

export function removeComment(commentId) {
	return {
		type: constants.COMMENT_REMOVE,
		payload: {
			commentId,
		},
	};
}

export function fieldChange(value) {
	return {
		type: constants.COMMENT_FIELD_CHANGE,
		payload: {
			value,
		},
	};
}

export function addComment(text) {
	return {
		type: constants.COMMENT_ADD,
		payload: {
			text,
		},
	};
}

export function clearComments() {
	return {
		type: constants.COMMENTS_CLEAR,
	};
}

export function thumbUpComments(commentId) {
	return {
		type: constants.COMMENT_THUMB_UP,
		payload: {
			commentId,
		},
	};
}

export function thumbDownComments(commentId) {
	return {
		type: constants.COMMENT_THUMB_DOWN,
		payload: {
			commentId,
		},
	};
}

export function clearInput() {
	return {
		type: constants.COMMENTS_CLEAR_INPUT,
	};
}
