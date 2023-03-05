import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js'

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

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

const profile = document.querySelector('.profile');

const buttonEditProfile = profile.querySelector('.profile__edit-button');

const profilePopup = document.querySelector('.popup_type_profile');
 
const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const profileForm = profilePopup.querySelector('.popup__form');

const nameInput = profileForm.querySelector('.popup__input_type_name');

const jobInput = profileForm.querySelector('.popup__input_type_job');

const buttonSubmitProfileForm = profileForm.querySelector('.popup__button');

const template = document.querySelector('#card-template').content;

const cardTemplate = template.querySelector('.card');

const cardPlaceContainer = document.querySelector('.elements');

const cardPopup = document.querySelector('.popup_type_add-card');

const buttonAddCard = profile.querySelector('.profile__add-button');

const cardTitle = cardPopup.querySelector('.popup__input_type_card-title');

const cardImageLink = cardPopup.querySelector('.popup__input_type_card-img-link');

const cardForm = cardPopup.querySelector('.popup__form');

const buttonSubmitCardForm = cardForm.querySelector('.popup__button');

const imageViewPopup = document.querySelector('.popup_type_image-view');

const modalImg = imageViewPopup.querySelector('.popup__image');

const modalSubtitle = imageViewPopup.querySelector('.popup__subtitle');

const cardTemplateSelector = '#card-template'

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', checkKeyClosePopup);
};

function checkKeyClosePopup (evt, popup) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  };
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', checkKeyClosePopup);
};

function openProfilePopup() {
  openPopup(profilePopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

function openCardPopup() {
  openPopup(cardPopup);
  disableButton(buttonSubmitCardForm, config);
};

function setImageClickHandler(placeImgLink, placeName) {
  modalImg.src = placeImgLink;
  modalImg.alt = `Фотография из места ${placeName}`;
  modalSubtitle.textContent = placeName;
  openPopup(imageViewPopup);
};

function createCard(placeImgLink, placeName) {
  const card = new Card(placeName, placeImgLink, cardTemplateSelector, setImageClickHandler);
  const cardElement = card.createCard();
  return cardElement;
}

function renderCards() {
  renderCardsInfo.forEach((item) => {
    const card = new Card(item.placeName, item.placeImgLink, cardTemplateSelector, setImageClickHandler);
    const cardElement = card.createCard();
    cardPlaceContainer.append(cardElement);
  });
}

renderCards();

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
};

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const placeImgLink = cardImageLink.value;
  const placeName = cardTitle.value;
  const card = createCard(placeImgLink, placeName);
  cardPlaceContainer.prepend(card);
  closePopup(cardPopup);
  disableButton(buttonSubmitCardForm, config);
  cardForm.reset();
};

function setLayerClosePopups() {
  const popupList = document.querySelectorAll('.popup');
  popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      };
    });
  });
};

setLayerClosePopups();

function setButtonsClosePopups() {
  const closeButtons = document.querySelectorAll('.popup__close-button');
  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
};

setButtonsClosePopups();

function setFormValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((item) => {
    const formElement = new FormValidator(config, item);
    formElement.enableValidation();
  });
};

setFormValidation(config);

buttonAddCard.addEventListener('click', openCardPopup);

buttonEditProfile.addEventListener('click', openProfilePopup);

cardForm.addEventListener('submit', handleAddCardFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);