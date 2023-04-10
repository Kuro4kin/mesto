import Popup from './Popup.js'
import { validationConfig } from '../utils/constant.js';

 export default class PopupWithForm extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector)
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._element.querySelector(validationConfig.formSelector);
    this._inputList = this._element.querySelectorAll(validationConfig.inputSelector);
    this._submitButton = this._element.querySelector(validationConfig.submitButtonSelector);
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    })
  }

  changeButtonText(isLoading) {
    if(isLoading) {
      this._submitButton.textContent = 'Загрузка...';
    } else {
      this._submitButton.textContent = 'Сохранить';
    }

  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues()
      this._handleFormSubmit(this._formValues);
    });
    return super.setEventListeners()
  }

  close() {
    this._form.reset();
    return super.close()
  }
}