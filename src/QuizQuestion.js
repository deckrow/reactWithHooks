import React, { useState, useRef, useEffect } from 'react';

const QuizQuestion = ({ data, nextQuestion, number, prevQuestion, addData, removeData }) => {
	const [ selectedVal, setSelectedVal ] = useState('');
	const input = useRef(null);

	useEffect(() => setSelectedVal(data[number - 1].answers[0]), [number]);

	const answers = (answer, i) => {
		return (
			<React.Fragment key={i}>
				<input 
					className="quiz__radio"
					type="radio"
					value={answer}
					id={`question${i}`}
					name="question"
					checked={selectedVal === answer}
					onChange={(e) => setSelectedVal(e.target.value)} />
				<label 
					className="quiz__label" 
					htmlFor={`question${i}`}>
					{answer}
				</label>
			</React.Fragment>
		);
	}

	const Buttons = () => (
		<div className="quiz__buttons">
			<button 
				className="quiz__next quiz--btn" 
				onClick={() => {
					nextQuestion(); 
					addData(number === 4 ? selectedVal + input.current.value : selectedVal);
					setSelectedVal('');
			}}>
					Следующий вопрос
			</button>
			{ number > 1 && 
				<button 
					className="quiz__prev"
					onClick={() => { 
						prevQuestion(); 
						removeData(); 
				}}>
					Вернуться к предыдущему
				</button>
			}
		</div>
	);

	return (
		<>
			<p className="quiz__info">Ответьте всего на 4 вопроса, чтобы мы могли подготовить предложение и рассчитать скидку.</p>
			<div className="quiz__question">
				<p className="quiz__question-title"><span>{data[number - 1].question}</span></p>
				{ number === 4 && 
					<>
							<input className="quiz__meter" type="number" placeholder="введите число" ref={input} minLength="1" required />
							<span>м<sup>2</sup></span>
					</>
				}
				<div className="quiz__question-answers">{data[number - 1].answers.map(answers)}</div>
			</div>
			<Buttons />
		</>
	)
}

export default QuizQuestion;