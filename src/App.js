import React from 'react';
import './App.css';
import CommentsContainer from './comments/CommentsContainer.js';
import DevTools from './DevTools.js';

const App = () => {
	return (
		<div className="App">
			<CommentsContainer />
			<DevTools />
		</div>
	);
};

export default App;
