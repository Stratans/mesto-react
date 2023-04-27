import avatar from '../images/emporer.jpg';

function Main() {
	function handleEditAvatarClick() {
		document.querySelector('.popup_type_avatar').classList.add('popup_opened')
	}
	function handleEditProfileClick() {
		document.querySelector('.popup_type_edit').classList.add('popup_opened')
	}
	function handleAddPlaceClick() {
		document.querySelector('.popup_type_add').classList.add('popup_opened')
	}

	return (
		<main className='content'>
			<section className='profile'>
				<div className='profile__avatar-container' onClick={handleEditAvatarClick}>
					<img className='profile__avatar' src={avatar} alt='пользовательский аватар' />
				</div>
				<div className='profile__info'>
					<h1 className='profile__name'>Император</h1>
					<button type='button' className='profile__edit-btn' onClick={handleEditProfileClick}></button>
					<p className='profile__job'>И его боевые братья</p>
				</div>
				<button type='button' className='profile__add-btn' onClick={handleAddPlaceClick}></button>
			</section>
			<section className='elements' aria-label='Фотогалерея'>

			</section>
		</main>
	)
}

export default Main