import React from 'react';
import './App.css';
import CommentsContainer from './comments/CommentsContainer.js';

const App = () => {
	return (
		<div className="App">
			Tu będzie lista komentarzy
			<CommentsContainer />
		</div>
	);
};

export default App;
