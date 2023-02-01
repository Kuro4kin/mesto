const profile = document.querySelector('.profile');

const editProfileButton = profile.querySelector('.profile__edit-button');

const profilePopup = document.querySelector('.popup_type_profile');

const closeProfilePopupButton = profilePopup.querySelector('.popup__close-button');
 
const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const profileForm = profilePopup.querySelector('.popup__form');

const nameInput = profileForm.querySelector('.popup__input_type_name');

const jobInput = profileForm.querySelector('.popup__input_type_job');

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

const template = document.querySelector('#card-template').content;

const cardTemplate = template.querySelector('.card')

const cardPlaceContainer = document.querySelector('.elements');

const cardPopup = document.querySelector('.popup_type_add-card');

const addCardButton = profile.querySelector('.profile__add-button');

const closeCardPopupButton = cardPopup.querySelector('.popup__close-button');

const cardTitle = cardPopup.querySelector('.popup__input_type_card-title');

const cardImageLink = cardPopup.querySelector('.popup__input_type_card-img-link');

const formAddCard = cardPopup.querySelector('.popup__form');

const imageViewPopup = document.querySelector('.popup_type_image-view');

const modalImg = imageViewPopup.querySelector('.popup__image');

const modalSubtitle = imageViewPopup.querySelector('.popup__subtitle');

const closeImageViewPopupButton = imageViewPopup.querySelector('.popup__close-button');

function cardDelete(cardElement) {
  const cardDeleteButton = cardElement.querySelector('.card__button-delete');
  cardDeleteButton.addEventListener('click', function() {
    cardDeleteButton.closest('.card').remove();
  })
};

function cardLike(cardElement) {
  const cardLikeButton = cardElement.querySelector('.card__button-like');
  cardLikeButton.addEventListener('click', function() {
    cardLikeButton.classList.toggle('card__button-like_active');
  })
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function editProfile() {
  openPopup(profilePopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

function addNewCard() {
  openPopup(cardPopup);
};

function setImageClickHandler(cardElement) {
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.addEventListener('click', function(evt) {
    modalImg.src = evt.target.src;
    modalImg.alt = `Фотография из места ${evt.target.nextElementSibling.firstElementChild.textContent}`;
    modalSubtitle.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    openPopup(imageViewPopup);
    })
};

function createCard(placeImgLink, placeName) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = placeImgLink;
  cardElement.querySelector('.card__image').alt = `Фотография из места ${placeName}`;
  cardElement.querySelector('.card__title').textContent = placeName;
  cardDelete(cardElement);
  cardLike(cardElement);
  setImageClickHandler(cardElement);
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
  closePopup(evt) 
};

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const placeImgLink = cardImageLink.value;
  const placeName = cardTitle.value;
  const card = createCard(placeImgLink, placeName);
  cardPlaceContainer.prepend(card);
  closePopup(cardPopup);
  cardTitle.value = '';
  cardImageLink.value = '';
};

addCardButton.addEventListener('click', addNewCard);

editProfileButton.addEventListener('click', editProfile);

closeProfilePopupButton.addEventListener('click', function(){
  closePopup(profilePopup);
});

closeImageViewPopupButton.addEventListener('click',function(){
  closePopup(imageViewPopup);
});

closeCardPopupButton.addEventListener('click', function(){
  closePopup(cardPopup);
});

formAddCard.addEventListener('submit', handleAddCardFormSubmit);

profileForm.addEventListener('submit', handleProfileFormSubmit);
