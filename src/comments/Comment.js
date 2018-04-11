import React from 'react';

const Comment = props => {
	return (
		<li>
			{props.text} <span> votes: {props.votes}</span>
			<button onClick={props.onRemoveClicked.bind(this, props.id)}>
				Remove
			</button>
		</li>
	);
};

export default Comment;
