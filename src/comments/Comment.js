import React from 'react';

const Comment = props => {
	return (
		<li>
			{props.text} <span> votes: {props.votes}</span>
			<button onClick={props.onRemoveClicked.bind(this, props.id)}>
				Remove
			</button>
			<button onClick={props.onThumbUpClicked.bind(this, props.id)}>
				+
			</button>
			<button onClick={props.onThumbDownClicked.bind(this, props.id)}>
				-
			</button>
		</li>
	);
};

export default Comment;
