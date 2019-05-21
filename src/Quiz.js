import React, { useState } from 'react';
import data from './Api.json';

import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion';

const Quiz = ({ toggleQuiz }) => {
	const [ num, setNum ] = useState(0);
	const [ result, setResult ] = useState([]);

	const List = () => (
		<ul className="quiz__list">
			{
				data.map((el, i) => 
				<li 
					className={`quiz__list-item ${i + 1 === num || i + 1 < num ? 'active' : ''}`} 
					key={i}>
						{i + 1}
				</li>
			)}
		</ul>
	);

	const quizNode = num === data.length + 1 ? (
		<QuizEnd result={result} />
	) : num > 0 ? (
		<QuizQuestion 
			number={num} 
			nextQuestion={() => setNum(num + 1)}
			prevQuestion={() => setNum(num - 1)}
			data={data}
			addData={(data) => setResult([...result, data])}
			removeData={() => setResult(result.slice(0, -1))}
			/>
	) : (
		<QuizStart 
			toggleQuiz={toggleQuiz} 
			startQuiz={() => setNum(num + 1)} />
	);

	return (
		<div className="quiz__block">
			<img 
				onClick={toggleQuiz}
				className="quiz__exit" 
				src="img/quiz-exit.png" 
				alt="exit" />
			{ num > 0 && num < data.length + 1 && <List /> }
			<div className="quiz__container">
				{quizNode}
			</div>
		</div>
	)
}

export default Quiz;