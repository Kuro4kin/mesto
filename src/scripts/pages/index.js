import '../../pages/index.css';

import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import { renderCardsInfo, validationConfig } from '../utils/constant.js';

import UserInfo from '../components/UserInfo.js';

import {
  buttonEditProfile,
  buttonAddCard,
  editProfilePopupSelector,
  addCardPopupSelector,
  previewImagePopupSelector,
  cardTemplateSelector,
  containerSelector } from '../utils/utils.js'

  const formValidators = {}

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      const validator = new FormValidator(config, formElement)
      const formName = formElement.getAttribute('name')
      formValidators[formName] = validator;
     validator.enableValidation();
    });
  };
  
  enableValidation(validationConfig);

function handleCardImageClick(placeImgLink, placeName) {
  previewImagePopup.open(placeImgLink, placeName);
};

const cardList = new Section({ 
  item: renderCardsInfo,
  renderer: (item) => {
    const cardElement = createCard(item.placeImgLink, item.placeName)
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
  return cardElement
}

const previewImagePopup = new PopupWithImage(previewImagePopupSelector);
previewImagePopup.setEventListeners();

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
  formValidators['card-add'].resetValidation();
  addCardPopup.open();
});

buttonEditProfile.addEventListener('click', () => {
  formValidators['profile-info'].resetValidation()
  editProfilePopup.open();
  const userInfo = profileInfo.getUserInfo();
  editProfilePopup.setInputValues(userInfo);
});
