//import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (props) => {
    setSelectedCard(props);
    setIsViewPopupOpen(true);
  };

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsViewPopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className='page'>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/* Попап "Редактировать профиль" */}
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen && 'popup_opened'}
        buttonText='Сохранить'
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_profile_name'
          type='text'
          name='name'
          required
          placeholder='Введите имя'
          minLength='2'
          maxLength='40' />
        <span className='popup__input-error input-name-error'></span>
        <input
          className='popup__input popup__input_profile_about'
          type='text'
          name='about'
          required
          placeholder='Введите профессию'
          minLength='2'
          maxLength='200' />
        <span className='popup__input-error input-about-error'></span>
      </PopupWithForm>

      {/* Попап "Добавление места" */}
      <PopupWithForm
        name='add'
        title='Добавление места'
        isOpen={isAddPlacePopupOpen && 'popup_opened'}
        onClose={closeAllPopups}
        buttonText='Создать'
      >
        <input
          className='popup__input popup__input_place_name'
          type='text'
          name='name'
          required
          placeholder='Название'
          minLength='2'
          maxLength='30' />
        <span className='popup__input-error input-place-error'></span>
        <input
          className='popup__input popup__input_place_link'
          type='url'
          name='link'
          required
          placeholder='Ссылка на картинку' />
        <span className='popup__input-error input-place-url-error'></span>
      </PopupWithForm>

      {/* Попап "Просмотр картинки" */}
      <ImagePopup
        isOpen={isViewPopupOpen && 'popup_opened'}
        name='show'
        card={selectedCard}
        onClose={closeAllPopups}
      />

      {/* Попап "Обновить аватар"  */}
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen && 'popup_opened'}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          className='popup__input popup__input_avatar'
          type='url'
          name='avatar'
          placeholder='Ссылка на картинку'
          required />
        <span className='popup__input-error avatar-error'></span>
      </PopupWithForm>

      {/* Попап "Подтверждение удаления карточки"  */}
      <PopupWithForm name='delete' title='Вы уверены?' buttonText='Да' />
    </div>
  )
}

export default App