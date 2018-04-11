import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './CommentsList.js';
import * as actions from '../actions/comments.js';
import CommentAdd from './CommentAdd.js';

class CommentsContainer extends React.Component {
	onRemoveClicked(id, event) {
		event.preventDefault();
		this.props.removeComment(id);
	}

	onFieldChange(event) {
		const value = event.target.value;

		this.props.fieldChange(value);
	}

	onAddComment(event) {
		event.preventDefault();

		const { text } = this.props.commentsStore;

		if (text.length) {
			this.props.addComment(text);
		}
	}

	onClearComments(event) {
		event.preventDefault();

		this.props.clearComments();
	}

	onThumbUpClicked(id, event) {
		event.preventDefault();

		this.props.thumbUpComments(id);
	}

	onThumbDownClicked(id, event) {
		event.preventDefault();

		this.props.thumpDownComments(id);
	}

	render() {
		return (
			<div>
				<CommentAdd
					text={this.props.commentsStore.text}
					onSubmitClicked={this.onAddComment.bind(this)}
					onFieldChange={this.onFieldChange.bind(this)}
				/>
				<CommentsList
					comments={this.props.commentsStore.comments}
					onRemoveClicked={this.onRemoveClicked.bind(this)}
					onThumbUpClicked={this.onThumbUpClicked.bind(this)}
					onThumbDownClicked={this.onThumbDownClicked.bind(this)}
				/>
				<button onClick={this.onClearComments.bind(this)}>
					Clear All
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		removeComment: id => dispatch(actions.removeComment(id)),
		fieldChange: value => dispatch(actions.fieldChange(value)),
		addComment: text => dispatch(actions.addComment(text)),
		clearComments: () => dispatch(actions.clearComments()),
		thumbUpComments: id => dispatch(actions.thumbUpComments(id)),
		thumpDownComments: id => dispatch(actions.thumbDownComments(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
