import '../../pages/index.css';

import Card from '../components/Card.js';

import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';

import PopupConfirmAction from '../components/PopupConfirmAction.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import Api from '../components/Api.js';

import { apiConfig, validationConfig } from '../utils/constant.js';

import UserInfo from '../components/UserInfo.js';

import {
  buttonEditProfile,
  buttonAddCard,
  buttonEditAvatarProfile,
  editProfilePopupSelector,
  addCardPopupSelector,
  previewImagePopupSelector,
  confirmActionPopupSelector,
  editAvatarPopupSelector,
  cardTemplateSelector,
  containerSelector} from '../utils/utils.js';

let userID = null;

const api = new Api(apiConfig);

const cardList = new Section({ 
  renderer: (data) => {
    const cardElement = createCard(data)
    cardList.addItem(cardElement);
  }
  }, containerSelector
);

const formValidators = {};

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


Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
  .then(([userInfo, cardInfo]) => {
    userID = userInfo._id;
    profileInfo.setUserInfo(userInfo);
    cardList.renderItem(cardInfo);
  })
  .catch((err) => {
    console.log(`Произошла ошибка ${err}`)
  })

function createCard(data) {
  const card = new Card(data, userID, { 
    handleCardImageClick: (placeImgLink, placeName) => {
      previewImagePopup.open(placeImgLink, placeName);
    },
    handleDeleteButtonClick: (card) => {
      comfirmDeletePopup.open();
      comfirmDeletePopup.setSubmitAction(() => {
        api.removeThisCard(card)
          .then(() => {
            card.remove();
            comfirmDeletePopup.close();
          })
          .catch((err) => {
            console.log(`Произошла ошибка ${err}`)
          })
      });
    },
    handleLikeButtonClick: (data) => {
      if (!card.hasMyLike(data._data.likes)) { 
         api.likeThisCard(data)
          .then((res) => {
            card.setLikeCounter(res);
            card.setLikesState(res.likes);
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`)
          })
      } else {
        api.unlikeThisCard(data)
        .then((res) => {
          card.setLikeCounter(res);
          card.setLikesState(res.likes);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`)
        })
      }
      return
  }}, cardTemplateSelector);
  const cardElement = card.generateCard();
  return cardElement
}

const profileInfo = new UserInfo({ 
  nameProfileSelector: '.profile__name',
  aboutProfileSelector: '.profile__about',
  avatarProfileSelector: '.profile__image'
  }
)

profileInfo.getUserInfo()

const previewImagePopup = new PopupWithImage(previewImagePopupSelector);
previewImagePopup.setEventListeners();

const comfirmDeletePopup = new PopupConfirmAction(confirmActionPopupSelector);

comfirmDeletePopup.setEventListeners();

const addCardPopup = new PopupWithForm(addCardPopupSelector, {
  handleFormSubmit: (data, submitButton) => {
    submitButton.textContent = 'Сохранение...';
    api.createNewCard(data)
      .then((cardInfo) => {
        const cardElement = createCard(cardInfo);
        cardList.addItem(cardElement);
        addCardPopup.close()
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`)
      })
      .finally(() => {
        submitButton.textContent = 'Сохранить'
      })
  }
});

addCardPopup.setEventListeners()

const editProfilePopup = new PopupWithForm(editProfilePopupSelector, {
  handleFormSubmit: (data, submitButton) => {
    submitButton.textContent = 'Сохранение...';
    api.editUserInfo(data)
      .then((userInfo) => {
        profileInfo.setUserInfo(userInfo);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        submitButton.textContent = 'Сохранить'
      })
  }
});

editProfilePopup.setEventListeners(); 

const editAvatarPopup = new PopupWithForm(editAvatarPopupSelector, {
  handleFormSubmit: (data, submitButton) => {
    submitButton.textContent = 'Сохранение...';
    api.editUserAvatar(data)
      .then((userInfo) => {
        profileInfo.setUserInfo(userInfo);
        editAvatarPopup.close()
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
      .finally(() => {
        submitButton.textContent = 'Сохранить'
      })
    }
});

editAvatarPopup.setEventListeners();

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

buttonEditAvatarProfile.addEventListener('click', () => {
  formValidators['avatar-edit'].resetValidation();
  editAvatarPopup.open();
})