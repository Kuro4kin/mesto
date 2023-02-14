const profile = document.querySelector('.profile');

const editProfileButton = profile.querySelector('.profile__edit-button');

const profilePopup = document.querySelector('.popup_type_profile');
 
const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const profileForm = profilePopup.querySelector('.popup__form');

const nameInput = profileForm.querySelector('.popup__input_type_name');

const jobInput = profileForm.querySelector('.popup__input_type_job');

const submitProfileButton = profileForm.querySelector('.popup__button');

const template = document.querySelector('#card-template').content;

const cardTemplate = template.querySelector('.card');

const cardPlaceContainer = document.querySelector('.elements');

const cardPopup = document.querySelector('.popup_type_add-card');

const addCardButton = profile.querySelector('.profile__add-button');

const cardTitle = cardPopup.querySelector('.popup__input_type_card-title');

const cardImageLink = cardPopup.querySelector('.popup__input_type_card-img-link');

const formAddCard = cardPopup.querySelector('.popup__form');

const submitCardButton = formAddCard.querySelector('.popup__button');

const imageViewPopup = document.querySelector('.popup_type_image-view');

const modalImg = imageViewPopup.querySelector('.popup__image');

const modalSubtitle = imageViewPopup.querySelector('.popup__subtitle');

function setCardDelete(cardElement) {
  const cardDeleteButton = cardElement.querySelector('.card__button-delete');
  cardDeleteButton.addEventListener('click', function() {
    cardDeleteButton.closest('.card').remove();
  })
};

function setCardLike(cardElement) {
  const cardLikeButton = cardElement.querySelector('.card__button-like');
  cardLikeButton.addEventListener('click', function() {
    cardLikeButton.classList.toggle('card__button-like_active');
  })
};

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
  enableValidation(config);
  enableButton(submitProfileButton, config);
};

function openCardPopup() {
  openPopup(cardPopup);
  enableValidation(config);
  disableButton(submitCardButton, config);
};

function setImageClickHandler(placeImgLink, placeName) {
  modalImg.src = placeImgLink;
  modalImg.alt = `Фотография из места ${placeName}`;
  modalSubtitle.textContent = placeName;
  openPopup(imageViewPopup);
};

function createCard(placeImgLink, placeName) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector('.card__image');
  const cardTitleElement = cardElement.querySelector('.card__title');
  cardImageElement.src = placeImgLink;
  cardImageElement.alt = `Фотография из места ${placeName}`;
  cardTitleElement.textContent = placeName;
  setCardDelete(cardElement);
  setCardLike(cardElement);
  cardImageElement.addEventListener('click', () => setImageClickHandler(placeImgLink, placeName));
  return cardElement;
}

function renderCards() {
  renderCardsInfo.forEach(function(item) { 
    const card = createCard(item.placeImgLink, item.placeName);
    cardPlaceContainer.append(card);
  });
};

renderCards();

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup) 
};

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const placeImgLink = cardImageLink.value;
  const placeName = cardTitle.value;
  const card = createCard(placeImgLink, placeName);
  cardPlaceContainer.prepend(card);
  closePopup(cardPopup);
  disableButton(submitCardButton, config)
  formAddCard.reset();
};

function setLayerClosePopups() {
  const popupList = document.querySelectorAll('.popup');
  popupList.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
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

addCardButton.addEventListener('click', openCardPopup);

editProfileButton.addEventListener('click', openProfilePopup);

formAddCard.addEventListener('submit', handleAddCardFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);