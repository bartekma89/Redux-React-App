import React from 'react';
import Comment from './Comment.js';
import './CommentsList.css';

const CommentsList = props => {
	return (
		<ul className="list">
			{props.comments.map(comment => (
				<Comment key={comment.id} {...comment} {...props} />
			))}
		</ul>
	);
};

export default CommentsList;
