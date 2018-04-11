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
