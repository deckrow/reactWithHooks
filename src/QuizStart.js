import React from 'react'

const QuizStart = ({ toggleQuiz, startQuiz }) => {
	const Buttons = () => (
		<div className="quiz__buttons" style={{marginTop: '25px'}}>
			<button 
				onClick={startQuiz} 
				className="quiz__button-start quiz--btn">
					Получить скидку
			</button>
			<button 
				onClick={toggleQuiz} 
				className="quiz__refuze">
					Отказаться
			</button>
		</div>
	)
	
	return (
		<>
			<p className="quiz__title"><span>Хотите</span> получить <span>индивидуальное предложение</span> со скидкой всего за 40 секунд?</p>
			<Buttons />
		</>
	)
}

export default QuizStart