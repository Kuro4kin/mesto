export default class Card {
  constructor(data, userID, { 
    handleCardImageClick,  
    handleDeleteButtonClick, 
    handleLikeButtonClick 
  }, templateSelector) {
    this._data = data;
    this.cardID = data._id;
    this._userID = userID;
    this._handleCardImageClick = handleCardImageClick;
    this._handleDeleteCard = handleDeleteButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._templateSelector = templateSelector;
    this._card = this._getTemplate();
    this._cardTitleElement = this._card.querySelector('.card__title');
    this._cardImageElement = this._card.querySelector('.card__image');
    this._cardLikeButton = this._card.querySelector('.card__button-like');
    this._cardDeleteButton = this._card.querySelector('.card__button-delete');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  removeCard() {
    this._card.remove();
  }

  hasMyLike(likes) {
    return likes.some((item) => {
      return item._id === this._userID;
    });
  }

  setLikeCounter(data) {
    const cardLikeCounter = this._card.querySelector('.card__like-counter');
    cardLikeCounter.textContent = data.likes.length;
  }

  _setEventListeners() { 
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this);
    });
    this._cardImageElement.addEventListener('click', () => {
      this._handleCardImageClick(this._data.link, this._data.name);
    });
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeButtonClick(this);
    });
  }

  _disableDeleteButton() {
    if (this._data.owner._id != this._userID) {
      this._cardDeleteButton.classList.add('card__button-delete_disabled')
    }
  }

  setLikesState(currentLikes) {
    this._data.likes = currentLikes;
    if (this.hasMyLike(currentLikes)) {
      this._cardLikeButton.classList.add('card__button-like_active');
    } else {
      this._cardLikeButton.classList.remove('card__button-like_active');
    }
  }

  generateCard=()=> {
    this._cardTitleElement.textContent = this._data.name;
    this._cardImageElement.src = this._data.link;
    this._cardImageElement.alt =`Фотография места ${this._data.name}`;
    this.setLikesState(this._data.likes);
    this._disableDeleteButton();
    this._setEventListeners();
    this.setLikeCounter(this._data);
    return this._card;
  }
};