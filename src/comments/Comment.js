import React from 'react';
import './Comment.css';

const Comment = props => {
	return (
		<div>
			<li className="list-item">
				<p className="content">{props.text}</p>
				<p> votes: {props.votes}</p>
			</li>
			<button
				className="trash"
				onClick={props.onRemoveClicked.bind(this, props.id)}
			>
				<i className="fas fa-trash-alt" />
			</button>
			<button
				className="thumbUp"
				onClick={props.onThumbUpClicked.bind(this, props.id)}
			>
				<i className="far fa-thumbs-up" />
			</button>
			<button
				className="thumbDown"
				onClick={props.onThumbDownClicked.bind(this, props.id)}
			>
				<i className="far fa-thumbs-down" />
			</button>
		</div>
	);
};

export default Comment;
