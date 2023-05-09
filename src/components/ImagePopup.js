import React from "react";


function ImagePopup({name, isOpen, onClose, card}) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
    >
      <div
        className="popup__container-show"
      >
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <img
          className="popup__photo"
          src={card.link}
          alt={card.name}
        />
        <p className="popup__subtitle">{card.name}</p>
      </div>
    </div>
  );
};

export default ImagePopup;