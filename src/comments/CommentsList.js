import React from 'react';
import Comment from './Comment.js';

const CommentsList = props => {
	return (
		<ul>
			{props.comments.map(comment => (
				<Comment key={comment.id} {...comment} {...props} />
			))}
		</ul>
	);
};

export default CommentsList;
