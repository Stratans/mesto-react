import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
//import ImagePopup from "./ImagePopup";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


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
    setIsViewPopupOpen({});
    console.log(777);
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
      {/* <ImagePopup
        isOpen={isViewPopupOpen && 'popup_opened'}
        name='view'
        card={selectedCard}
        onClose={closeAllPopups}
      /> */}


      {/* Попап "Обновить аватар"  */}
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen && 'popup_opened'}
        onClose={closeAllPopups}
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
      <PopupWithForm name='delete' title='Вы уверены?' />



      {/* Темплейт (шаблон) для элементов  */}
      <template id='element-template'>
        <article className='element'>
          <img className='element__img' src='#' alt='#' />
          <div className='element__info'>
            <h2 className='element__title'></h2>
            <div className='element__like-container' >
              <button type='button' className='element__btn-like'></button>
              <p className='element__like-number'></p>
            </div>
          </div>
          <button type='button' className='element__btn-trash'></button>
        </article>
      </template>




    </div>

  )
}

export default App