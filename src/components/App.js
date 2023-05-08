import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import { api } from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleCardClick = (props) => {
    setSelectedCard(props);
    setIsViewPopupOpen(true);
  };

  function handleLikeCard(element) {
    const isLiked = element.likes.some(i => i._id === currentUser._id);

    api.toggleLike(element._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === element._id ? newCard : c))
    });
  };

  function handleCardDelete(cardToDelete) {
    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        setCards((state) => state
          .filter((item) => item._id !== cardToDelete._id))
      })
      .catch(err => { console.log(err) })
  };

  function handleUpdateProfile({ name, about }) {
    api.updateProfile({ name, about })
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups()
      })
      .catch(err => { console.log(err) })
  };

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups()
      })
      .catch(err => { console.log(err) })
  };

  function handleAddplace({ name, link }) {
    api.setCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => { console.log(err) })
  };

  function setInitialCards() {
    api
      .getInitialCards()
      .then(cardData => {
        setCards(cardData)
      })
      .catch(err => { console.log(err) })
  };

  useEffect(() => {
    setInitialCards()
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then(userData => setCurrentUser(userData))
      .catch(err => { console.log(err) })
  }, []);

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleLikeCard}
          onCardDelete={handleCardDelete}
          cards={cards}
        />

        <Footer />

        {/* Попап "Редактировать профиль" */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen && 'popup_opened'}
          buttonText='Сохранить'
          onClose={closeAllPopups}
          onUpdateProfile={handleUpdateProfile}
        />

        {/* Попап "Обновить аватар"  */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen && 'popup_opened'}
          onClose={closeAllPopups}
          buttonText='Сохранить'
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* Попап "Добавление места" */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen && 'popup_opened'}
          onClose={closeAllPopups}
          buttonText='Создать'
          onAddPlace={handleAddplace}
        />

        {/* Попап "Просмотр картинки" */}
        <ImagePopup
          isOpen={isViewPopupOpen && 'popup_opened'}
          name='show'
          card={selectedCard}
          onClose={closeAllPopups}
        />

        {/* Попап "Подтверждение удаления карточки"  */}
        <PopupWithForm name='delete' title='Вы уверены?' buttonText='Да' />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App