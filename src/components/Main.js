import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function Main(props) {

	const currentUser = useContext(CurrentUserContext);

	return (
		<main className='content'>
			<section className='profile'>
				<div className='profile__avatar-container' onClick={props.onEditAvatar}>
					<img
						className='profile__avatar'
						src={currentUser.avatar}
						alt='пользовательский аватар'
					/>
				</div>
				<div className='profile__info'>
					<h1 className='profile__name'>{currentUser.name}</h1>
					<button
						type='button'
						className='profile__edit-btn'
						onClick={props.onEditProfile}
					></button>
					<p className='profile__job'>{currentUser.about}</p>
				</div>
				<button
					type='button'
					className='profile__add-btn'
					onClick={props.onAddPlace}>
				</button>
			</section>
			<section className='elements' aria-label='Фотогалерея'>
				{props.cards.map(card => (
					<Card
						key={card._id}
						card={card}
						onCardClick={props.onCardClick}
						onCardLike={props.onCardLike}
						onCardDelete={props.onCardDelete}
					/>
				))}
			</section>
		</main>
	);
};

export default Main