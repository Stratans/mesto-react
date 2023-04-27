function PopupWithForm(props) {
	return (
		<div className={`popup popup_type_${props.name} ${props.isOpen}`}>
			<div className='popup__container'>
				<button
					className='popup__close'
					type='button'
					onClick={props.onClose}
				>
				</button>
				<h2 className='popup__title'>{props.title}</h2>
				<form
					className={`popup__form popup__form_type_${props.name}`}
					name='profile-info'
					noValidate
				>
					{props.children}
					<button
						className='popup__btn-save'
						type='submit'
					>
						{props.buttonText}
					</button>
				</form>
			</div>
		</div >
	);
};

export default PopupWithForm