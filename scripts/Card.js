export class Card {
  constructor(title, image, templateSelector, setImageClickHandler){
    this.title = title;
    this.image = image;
    this._templateSelector = templateSelector;
    this._setImageClickHandler = setImageClickHandler;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return cardElement;
  }

  _setEventListeners(card) {
    const cardLikeButton = card.querySelector('.card__button-like');
    const cardDeleteButton = card.querySelector('.card__button-delete');
    const cardImage = card.querySelector('.card__image');
    cardLikeButton.addEventListener('click', ()=>{
      this._handleCardLike(cardLikeButton);
    });
    cardDeleteButton.addEventListener('click', ()=>{
      this._handleCardDelete(card);
    });
    cardImage.addEventListener('click', ()=>{
      this._setImageClickHandler(this.image, this.title);
    })
  }

  _handleCardLike(button) {
    button.classList.toggle('card__button-like_active');
  }

  _handleCardDelete(card) {
    this.card.remove();
  }

  createCard() {
    this.card = this._getTemplate();
    this.card.querySelector('.card__title').textContent = this.title;
    this.card.querySelector('.card__image').src = this.image;
    this.card.querySelector('.card__image').alt =`Фотография места ${this.title}`
    this._setEventListeners(this.card);
    return this.card;
  }
};

