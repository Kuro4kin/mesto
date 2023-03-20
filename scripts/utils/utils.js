const buttonEditProfile = document.querySelector('.profile__edit-button');

const profilePopup = document.querySelector('.popup_type_profile');

const profileForm = profilePopup.querySelector('.popup__form');

const nameInput = profileForm.querySelector('.popup__input_type_name');

const jobInput = profileForm.querySelector('.popup__input_type_job');

const cardPopup = document.querySelector('.popup_type_add-card');

const buttonAddCard = document.querySelector('.profile__add-button');

const cardForm = cardPopup.querySelector('.popup__form');

const editProfilePopupSelector = '.popup_type_profile'

const addCardPopupSelector = '.popup_type_add-card'

const previewImagePopupSelector = '.popup_type_image-view';

const cardTemplateSelector = '#card-template';

const containerSelector = '.elements';

export {
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
  containerSelector };