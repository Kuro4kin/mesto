import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import { renderCardsInfo, validationConfig } from '../utils/constant.js';

import UserInfo from '../components/UserInfo.js';

import {
  buttonEditProfile,
  profilePopup,
  profileForm,
  nameInput,
  jobInput,
  cardPopup,
  buttonAddCard,
  cardForm,
  editProfilePopupSelector,
  addCardPopupSelector,
  previewImagePopupSelector,
  cardTemplateSelector,
  containerSelector } from '../utils/utils.js'

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const cardFormValidator = new FormValidator(validationConfig, cardForm);

profileFormValidator.enableValidation();

cardFormValidator.enableValidation();

function handleCardImageClick(placeImgLink, placeName) {
  previewImagePopup.open(placeImgLink, placeName);
};

const cardList = new Section({ 
  item: renderCardsInfo,
  renderer: (item) => {
    const card = new Card({ 
      title: item.placeName, 
      imageLink: item.placeImgLink
      }, handleCardImageClick, cardTemplateSelector
    );
  
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
  }, containerSelector
);

cardList.renderItem();

const profileInfo = new UserInfo({ 
  nameProfileSelector: '.profile__name',
  jobProfileSelector: '.profile__job'
  }
)
profileInfo.getUserInfo()

function createCard(placeImgLink, placeName) {
  const card = new Card({ 
    title: placeName, 
    imageLink: placeImgLink
  }, 
  handleCardImageClick, cardTemplateSelector);
  const cardElement = card.createCard();
  return cardElement;
}

const previewImagePopup = new PopupWithImage(previewImagePopupSelector);

const addCardPopup = new PopupWithForm(addCardPopupSelector, {
  handleFormSubmit: (data) => {
    const cardElement = createCard(data.link, data.title);
    cardList.addItem(cardElement);
  }
});
addCardPopup.setEventListeners()

const editProfilePopup = new PopupWithForm(editProfilePopupSelector, {
  handleFormSubmit: (data) => {
    profileInfo.setUserInfo(data);
  }
});

editProfilePopup.setEventListeners()

buttonAddCard.addEventListener('click', () => {
  addCardPopup.open();
  cardFormValidator.disableButton()
});

buttonEditProfile.addEventListener('click', () => {
  editProfilePopup.open();
  const userInfo = profileInfo.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;
});