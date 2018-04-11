import React from 'react';
import { connect } from 'react-redux';
import CommentsList from './CommentsList.js';
import * as actions from '../actions/comments.js';
import CommentAdd from './CommentAdd.js';

class CommentsContainer extends React.Component {
	onRemoveClicked(id, event) {
		event.preventDefault();
		console.log('remove');
		this.props.removeComment(id);
	}

	onFieldChange(event) {
		const value = event.target.value;

		this.props.fieldChange(value);
	}

	onAddComment(event) {
		event.preventDefault();

		const { text } = this.props;

		this.props.addComment(text);
	}

	render() {
		return (
			<div>
				<CommentAdd
					text={this.props.text}
					onSubmitClicked={this.onAddComment.bind(this)}
					onFieldChange={this.onFieldChange.bind(this)}
				/>
				<CommentsList
					comments={this.props.comments}
					onRemoveClicked={this.onRemoveClicked.bind(this)}
				/>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
