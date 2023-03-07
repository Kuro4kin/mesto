export class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
    this._inputList = formElement.querySelectorAll(this.config.inputSelector);
    this._formSubmitButton = formElement.querySelector(this.config.submitButtonSelector);
  }

  _showInputError(errorElement, inputElement) {
    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.classList.add(this.config.errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(errorElement, inputElement) {
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.classList.remove(this.config.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidation(inputElement, errorElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(errorElement, inputElement);
    } else {
      this._hideInputError(errorElement, inputElement);
    };
  }

  _hasValidityInput(arrayInputList) {
    return arrayInputList.every((input) => {
      return input.validity.valid;
    });
  }

  _enableButton() {
    this._formSubmitButton.classList.remove(this.config.inactiveButtonClass);
    this._formSubmitButton.removeAttribute('disabled', 'disabled');
  }

  disableButton() {
    this._formSubmitButton.classList.add(this.config.inactiveButtonClass);
    this._formSubmitButton.setAttribute('disabled', 'disabled');
  }

  _toggleButtonState(buttonState) {
    if (buttonState) {
      this._enableButton();
    } else {
      this.disableButton();
    };
  }

  _setInputListener() {
    const arrayInputList = Array.from(this._inputList);
    this._inputList.forEach((inputElement) => {
      const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
      inputElement.addEventListener('input', () => {
        const buttonState = this._hasValidityInput(arrayInputList);
        this._checkInputValidation(inputElement, errorElement);
        this._toggleButtonState(buttonState);
      });
    });
  }

  enableValidation() {
    this._setInputListener();
  }
};