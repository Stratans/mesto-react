// import React from "react";

// function ImagePopup(props) {
//   return (
//     <div
//       className={`popup popup_type_${props.name} ${props.isOpen}`}
//       onClick={props.onClose}
//     >
//       <div
//         className="popup__container-show"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           type="button"
//           className="popup__close"
//           onClick={props.onClose}
//         ></button>
//         <img
//           className="popup__photo"
//           src={props.card.link}
//           alt={props.card.name}
//         />
//         <p className="popup__subtitle">{props.card.name}</p>
//       </div>
//     </div>
//   );
// }

// export default ImagePopup;