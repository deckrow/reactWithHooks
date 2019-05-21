import React, { useState } from 'react';

import Robot from './Robot';
import Quiz from './Quiz';

import './App.css';

const App = () => {
	const [ isActive, setIsActive ] = useState(false);

	const toggleQuiz = () => setIsActive(!isActive);

	return (
		<div className="quiz">
			{ !!isActive && <Quiz toggleQuiz={toggleQuiz} /> }
			<Robot toggleQuiz={toggleQuiz} />
		</div>
	)
}

export default App;
