import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm'


/* Попап "Добавление места" */
function AddPlacePopup(props) {

	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	function handleChangeName(evt) {
		setName(evt.target.value)
	};

	function handleChangeLink(evt) {
		setLink(evt.target.value)
	};

	function handleSubmit(evt) {
		evt.preventDefault()
		props.onAddPlace({ name, link })
	};

	useEffect(() => {
		setName('')
		setLink('')
	}, [props.isOpen]);

	return (
		<PopupWithForm
			onSubmit={handleSubmit}
			name='add'
			title='Добавление места'
			isOpen={props.isOpen && 'popup_opened'}
			onClose={props.onClose}
			buttonText='Создать'
		>
			<input
				value={name || ''}
				onChange={handleChangeName}
				className='popup__input popup__input_place_name'
				type='text'
				name='name'
				required
				placeholder='Название'
				minLength='2'
				maxLength='30' />
			<span className='popup__input-error input-place-error'></span>
			<input
				value={link || ''}
				onChange={handleChangeLink}
				className='popup__input popup__input_place_link'
				type='url'
				name='link'
				required
				placeholder='Ссылка на картинку' />
			<span className='popup__input-error input-place-url-error'></span>
		</PopupWithForm>
	);
};

export default AddPlacePopup