import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';

import { renderCardsInfo, validationConfig } from '../utils/constant.js';

const profile = document.querySelector('.profile');

const buttonEditProfile = profile.querySelector('.profile__edit-button');

const profilePopup = document.querySelector('.popup_type_profile');
 
const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const profileForm = profilePopup.querySelector('.popup__form');

const nameInput = profileForm.querySelector('.popup__input_type_name');

const jobInput = profileForm.querySelector('.popup__input_type_job');

const cardPlaceContainer = document.querySelector('.elements');

const cardPopup = document.querySelector('.popup_type_add-card');

const buttonAddCard = profile.querySelector('.profile__add-button');

const cardTitle = cardPopup.querySelector('.popup__input_type_card-title');

const cardImageLink = cardPopup.querySelector('.popup__input_type_card-img-link');

const cardForm = cardPopup.querySelector('.popup__form');

const imageViewPopup = document.querySelector('.popup_type_image-view');

const modalImg = imageViewPopup.querySelector('.popup__image');

const modalSubtitle = imageViewPopup.querySelector('.popup__subtitle');

const cardTemplateSelector = '#card-template';

const containerSelector = '.elements'

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const cardFormValidator = new FormValidator(validationConfig, cardForm);

profileFormValidator.enableValidation();

cardFormValidator.enableValidation();

const cardList = new Section(
  { item: renderCardsInfo,
    renderer: (item) => {
      const card = new Card(item.placeName, item.placeImgLink, cardTemplateSelector, handleCardImageClick);
      const cardElement = card.createCard();
      cardList.addItem(cardElement);
    }
  }, containerSelector);

cardList.renderItem();

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
  cardFormValidator.disableButton();
  openPopup(cardPopup);
};

function handleCardImageClick(placeImgLink, placeName) {
  modalImg.src = placeImgLink;
  modalImg.alt = `Фотография из места ${placeName}`;
  modalSubtitle.textContent = placeName;
  openPopup(imageViewPopup);
};

function createCard(placeImgLink, placeName) {
  const card = new Card(placeName, placeImgLink, cardTemplateSelector, handleCardImageClick);
  const cardElement = card.createCard();
  return cardElement;
}

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

buttonAddCard.addEventListener('click', openCardPopup);

buttonEditProfile.addEventListener('click', openProfilePopup);

cardForm.addEventListener('submit', handleAddCardFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);