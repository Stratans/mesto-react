import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm'


/* Попап "Редактировать профиль" */
function EditAvatarPopup(props) {

	const avatarRef = useRef();

	function handleSubmit(evt) {
		evt.preventDefault()
		props.onUpdateAvatar(avatarRef.current.value)
	};

	useEffect(() => {
		avatarRef.current.value = ''
	}, [props.isOpen]);

	return (
		<PopupWithForm
			name='avatar'
			title='Обновить аватар'
			isOpen={props.isOpen}
			onClose={props.onClose}
			buttonText={props.buttonText}
			onSubmit={handleSubmit}
		>
			<input
				ref={avatarRef}
				className='popup__input popup__input_avatar'
				type='url'
				name='avatar'
				placeholder='Ссылка на картинку'
				required />
			<span className='popup__input-error avatar-error'></span>
		</PopupWithForm>
	);
};

export default EditAvatarPopup