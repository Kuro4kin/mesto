export class Card {
  constructor(title, imageLink, templateSelector, handleCardImageClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._templateSelector = templateSelector;
    this.handleCardImageClick = handleCardImageClick;
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
    const cardLikeButton = this._card.querySelector('.card__button-like');
    const cardDeleteButton = this._card.querySelector('.card__button-delete');
    const cardImage = this._card.querySelector('.card__image');
    cardDeleteButton.addEventListener('click', ()=>{
      this._handleCardDelete();
    });
    cardImage.addEventListener('click', ()=>{
      this.handleCardImageClick(this._imageLink, this._title);
    });
    cardLikeButton.addEventListener('click', ()=>{
      this._handleCardLike(cardLikeButton);
    });
  }

  _handleCardLike(cardLikeButton) {
    cardLikeButton.classList.toggle('card__button-like_active');
  }

  _handleCardDelete() {
    this._card.remove();
  }

  createCard() {
    this._card = this._getTemplate();
    const cardTitleElement = this._card.querySelector('.card__title');
    const cardImageElement = this._card.querySelector('.card__image')
    cardTitleElement.textContent = this._title;
    cardImageElement.src = this._imageLink;
    cardImageElement.alt =`Фотография места ${this.title}`
    this._setEventListeners(this._card);
    return this._card;
  }
};

