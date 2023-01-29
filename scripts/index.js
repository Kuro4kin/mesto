const profile = document.querySelector('.profile');

const editProfileButton = profile.querySelector('.profile__edit-button');

const popupOpened = document.querySelector('.popup');

const closeEditButton = popupOpened.querySelector('.popup__close-button');
 
const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const formElement = popupOpened.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__input_type_name');

const jobInput = formElement.querySelector('.popup__input_type_job');

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

const cardImage = cardTemplate.querySelector('.card__image');

const cardName = cardTemplate.querySelector('.card__title');

const popupAddCardOpened = document.querySelector('.popup_type_add-card');

const addCardButton = profile.querySelector('.profile__add-button');

const closeCardEditButton = popupAddCardOpened.querySelector('.popup__close-button');

const cardTitle = popupAddCardOpened.querySelector('.popup__input_type_card-title');

const cardImageLink = popupAddCardOpened.querySelector('.popup__input_type_card-img-link');

const formAddCard = popupAddCardOpened.querySelector('.popup__form');

const modalViewImgOpened = document.querySelector('.popup_type_image-view');

const modalImg = modalViewImgOpened.querySelector('.popup__image');

const modalSubtitle = modalViewImgOpened.querySelector('.popup__subtitle');

const closeModalContentButton = modalViewImgOpened.querySelector('.popup__close-button');

function cardDelete(card) {
  const cardDeleteButton = card.querySelector('.card__button-delete');
  cardDeleteButton.addEventListener('click', function() {
    cardDeleteButton.closest('.card').remove()
  })
};

function cardLike(card) {
  const cardLikeButton = card.querySelector('.card__button-like');
  cardLikeButton.addEventListener('click', function() {
    cardLikeButton.classList.toggle('card__button-like_active')
  })
};

function openModalContent(card) {
  const cardImage = card.querySelector('.card__image');
  cardImage.addEventListener('click', function(evt) {
    modalViewImgOpened.classList.add('popup_opened')
    modalImg.src = evt.target.src;
    console.log()
    modalSubtitle.textContent = evt.target.nextElementSibling.firstElementChild.textContent
    })
};

function openModal() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
  popupOpened.classList.add('popup_opened')
};

function openModalAddCard() {
  popupAddCardOpened.classList.add('popup_opened');
  cardTitle.value = '';
  cardImageLink.value = '';
};

function closeModal(evt) { 
  evt.target.closest('.popup').classList.remove('popup_opened')
}; 

function renderCards() {
  renderCardsInfo.forEach(function(item) {
    cardImage.src = item.placeImgLink;
    cardImage.alt = `Фотография из места ${item.placeName}`
    cardName.textContent = item.placeName;
    const card = cardTemplate.cloneNode(true);
    cardDelete(card);
    cardLike(card);
    openModalContent(card);
    cardPlaceContainer.append(card);
  });
};

renderCards();

function handleFormSubmit(evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(evt) 
};

function submitFormAddCard(evt) {
  evt.preventDefault();
  cardImage.src = cardImageLink.value;
  cardImage.alt = `Фотография из места ${cardTitle.value}`
  cardName.textContent = cardTitle.value;
  const card = cardTemplate.cloneNode(true);
  cardDelete(card);
  cardLike(card);
  openModalContent(card);
  cardPlaceContainer.prepend(card);
  closeModal(evt);
};

editProfileButton.addEventListener('click', openModal);

closeEditButton.addEventListener('click', closeModal);

formElement.addEventListener('submit', handleFormSubmit);

addCardButton.addEventListener('click', openModalAddCard);

closeCardEditButton.addEventListener('click', closeModal);

formElement.addEventListener('submit', handleFormSubmit);

formAddCard.addEventListener('submit', submitFormAddCard);

closeModalContentButton.addEventListener('click', closeModal);