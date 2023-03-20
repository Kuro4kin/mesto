export default class Popup {
  constructor(selector) {
    this._element = document.querySelector(selector);
    this._closeButton = this._element.querySelector('.popup__close-button');
  }

  open() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._element.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      };
    });
    this._closeButton.addEventListener('mousedown', () => {
      this.close()
    });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
}