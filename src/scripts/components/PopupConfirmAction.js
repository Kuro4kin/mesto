import Popup from './Popup.js'

export default class PopupConfirmAction extends Popup {
  constructor(selector) {
    super(selector)
    this._buttonConfirAction = this._element.querySelector('.popup__button')
  }

  setSubmitAction(action) {
    this._handleSubmitCallBack = action
  }

  setEventListeners(data) {
    this._buttonConfirAction.addEventListener('click', (evt) => {
      evt.preventDefault();

      this._handleSubmitCallBack();
    });

    return super.setEventListeners()
  }
}