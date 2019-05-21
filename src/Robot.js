import React from 'react';

const Robot = ({ toggleQuiz }) => (
	<div className="quiz__robot" onClick={toggleQuiz}>
		<img src="img/quiz-robot.png" alt="robot" />
	</div>
)

export default Robot;