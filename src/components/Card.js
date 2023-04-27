import React from 'react'

function Card(props) {

	function cardClick() {
		props.onCardClick(props.card)
	}

	return (
		<article className='element'>
			<img className='element__img' src={props.card.link} alt={props.card.name} onClick={cardClick} />
			<div className='element__info'>
				<h2 className='element__title'>{props.card.name}</h2>
				<div className='element__like-container' >
					<button type='button' className='element__btn-like'></button>
					<p className='element__like-number'>{props.card.likes.length}</p>
				</div>
			</div>
			<button type='button' className='element__btn-trash'></button>
		</article>
	);
};

export default Card