import React from 'react';
import './CommentAdd.css';

const CommentAdd = props => {
	return (
		<form onSubmit={props.onSubmitClicked}>
			<textarea
				type="text"
				placeholder="Write something awsome..."
				rows="5"
				cols="40"
				value={props.text}
				onChange={props.onFieldChange}
			/>
			<div className="bgroup">
				<button className="add" type="submit">
					<i className="fas fa-plus" /> Add Comment
				</button>
				<button
					className="clean"
					type="reset"
					onClick={props.onClearInput}
				>
					<i className="fas fa-eraser" /> Clean
				</button>
			</div>
		</form>
	);
};

export default CommentAdd;
