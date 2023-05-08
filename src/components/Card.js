import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card(props) {
	const currentUser = useContext(CurrentUserContext);
	const isOwn = props.card.owner._id === currentUser._id;
	const isLiked = props.card.likes.some(i => i._id === currentUser._id);
	const cardLikeBtn = (
		`element__btn-like ${isLiked && 'element__btn-like_active'}`
	);

	function cardClick() {
		props.onCardClick(props.card)
	};

	function handleLikeClick() {
		props.onCardLike(props.card)
	};

	function handleDeleteClick() {
		props.onCardDelete(props.card)
	};

	return (
		<article className='element'>
			<img
				className='element__img'
				src={props.card.link}
				alt={props.card.name}
				onClick={cardClick}
			/>
			<div className='element__info'>
				<h2 className='element__title'>{props.card.name}</h2>
				<div className='element__like-container' >
					<button
						type='button'
						className={cardLikeBtn}
						onClick={handleLikeClick}
					></button>
					<p className='element__like-number'>{props.card.likes.length}</p>
				</div>
			</div>
			{isOwn &&
				<button
					type='button'
					className='element__btn-trash'
					onClick={handleDeleteClick}>
				</button>}
		</article>
	);
};

export default Card