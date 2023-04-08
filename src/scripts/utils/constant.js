const apiConfig = {
  user: 'https://nomoreparties.co/v1/cohort-63/users/me',
  cards: 'https://mesto.nomoreparties.co/v1/cohort-63/cards',
  authorization: '1259cec5-ebd0-4aff-9c06-6fdb6fbb94dd'
}

const renderCardsInfo = [
  {
    placeName: 'Архыз',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    placeName: 'Челябинская область',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    placeName: 'Иваново',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    placeName: 'Камчатка',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    placeName: 'Холмогорский район',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    placeName: 'Байкал',
    placeImgLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const validationConfig  = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export { apiConfig, renderCardsInfo, validationConfig };