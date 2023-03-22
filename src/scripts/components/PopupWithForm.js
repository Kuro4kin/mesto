import Popup from './Popup.js'
import { validationConfig } from '../utils/constant.js';

 export default class PopupWithForm extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector)
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._element.querySelector(validationConfig.formSelector);
    this._inputList = this._element.querySelectorAll(validationConfig.inputSelector);
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

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues()
      this._handleFormSubmit(this._formValues);
      this.close();
    });
    return super.setEventListeners()
  }

  close() {
    this._form.reset();
    return super.close()
  }
}