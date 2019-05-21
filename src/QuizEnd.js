import React, { useState } from 'react'
import axios from 'axios'
import MaskedInput from 'react-maskedinput'

const QuizEnd = ({ result }) => {
	const [ phone, setPhone ] = useState('');
	const [ success, setSuccess ] = useState(false);

	const sendForm = () => {
		const data = {
			'name': 'Заявка из опросника',
			'tel': phone,
			'comment': 'Заявка из опросника, нужно составить индивидуальное предложение со скидкой. Введенные данные:' + result.join(', ')
		};

		if (phone) {
			axios.post("action_quiz.php", data)
			.then((res) => console.log('success'))
			.catch((error) => console.log('error'));

			setSuccess(true);
		}
	}

	return (
		<div className="quiz__end">
			{ !!success ? (
					<p className="quiz__title"><span>Спасибо, мы приняли вашу заявку!</span></p>
				) : (
					<>
						<p className="quiz__title"><span>Отлично, мы отправили введенные данные специалисту.</span></p>
						<p className="quiz__title">Он составит индивидуальное предложение, рассчитает возможную скидку и позвонит вам!</p>
						<div className="quiz__end-form">
							<MaskedInput 
								mask="+7 (111) 111-11-11"  
								placeholder="Оставьте ваш номер здесь" 
								onChange={(e) => setPhone(e.target.value)} required />
							<button className="quiz--btn" onClick={sendForm}>Позвоните мне!</button>
						</div>
					</>
				)
			}
		</div>
	)
}

export default QuizEnd