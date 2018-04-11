import React from 'react';

const CommentAdd = props => {
	return (
		<form onSubmit={props.onSubmitClicked}>
			<textarea
				type="text"
				placeholder="Write something awsome..."
				value={props.text}
				onChange={props.onFieldChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default CommentAdd;
