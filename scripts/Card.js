export class Card {
  constructor(title, imageLink, templateSelector, handleCardImageClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._templateSelector = templateSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._card = this._getTemplate();
    this._cardTitleElement = this._card.querySelector('.card__title');
    this._cardImageElement = this._card.querySelector('.card__image');
    this._cardLikeButton = this._card.querySelector('.card__button-like');
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const cardDeleteButton = this._card.querySelector('.card__button-delete');
    cardDeleteButton.addEventListener('click', ()=>{
      this._handleCardDelete();
    });
    this._cardImageElement.addEventListener('click', ()=>{
      this._handleCardImageClick(this._imageLink, this._title);
    });
    this._cardLikeButton.addEventListener('click', ()=>{
      this._handleCardLike();
    });
  }

  _handleCardLike() {
    this._cardLikeButton.classList.toggle('card__button-like_active');
  }

  _handleCardDelete() {
    this._card.remove();
  }

  createCard=()=> {
    this._cardTitleElement.textContent = this._title;
    this._cardImageElement.src = this._imageLink;
    this._cardImageElement.alt =`Фотография места ${this.title}`
    this._setEventListeners(this._card);
    return this._card;
  }
};

