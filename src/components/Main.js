import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('');
	const [userAvatar, setUserAvatar] = useState('');
	const [cards, setCards] = useState([]);

	function setUserData() {
		api.getUserInfo().then(userData => {
			setUserName(userData.name);
			setUserDescription(userData.about);
			setUserAvatar(userData.avatar);
		}).catch(err => { console.log(err) })
	};

	function setInitialCards() {
		api.getInitialCards().then(cardData => {
			setCards(cardData)
		}).catch(err => { console.log(err) })
	};

	useEffect(() => {
		setUserData()
		setInitialCards()
	}, []);

	return (
		<main className='content'>
			<section className='profile'>
				<div className='profile__avatar-container' onClick={props.onEditAvatar}>
					<img
						className='profile__avatar'
						src={userAvatar}
						alt='пользовательский аватар' />
				</div>
				<div className='profile__info'>
					<h1 className='profile__name'>{userName}</h1>
					<button
						type='button'
						className='profile__edit-btn'
						onClick={props.onEditProfile}></button>
					<p className='profile__job'>{userDescription}</p>
				</div>
				<button type='button' className='profile__add-btn' onClick={props.onAddPlace}></button>
			</section>
			<section className='elements' aria-label='Фотогалерея'>
				{cards.map(card => (
					<Card key={card._id} card={card} onCardClick={props.onCardClick} />
				))}
			</section>
		</main>
	)
}

export default Main