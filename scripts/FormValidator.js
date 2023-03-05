export class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
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

  _hasValidityInput(inputList) {
    return inputList.every((inputElement) => {
      return inputElement.validity.valid;
    });
  }

  _enableButton(button) {
    button.classList.remove(this.config.inactiveButtonClass);
    button.removeAttribute('disabled', 'disabled');
  }

  _disableButton (button) {
    button.classList.add(this.config.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  }

  _toggleButtonState(buttonSubmitForm, buttonState) {
    if (buttonState) {
      this._enableButton(buttonSubmitForm);
    } else {
      this._disableButton(buttonSubmitForm);
    };
  }

  _setInputListener(inputList, buttonSubmitForm) {
    const inputs = Array.from(inputList);
    inputList.forEach((inputElement) => {
      const errorElement = this.formElement.querySelector(`.${inputElement.name}-error`);
      inputElement.addEventListener('input', () => {
        const buttonState = this._hasValidityInput(inputs);
        this._checkInputValidation(inputElement, errorElement);
        this._toggleButtonState(buttonSubmitForm, buttonState);
      });
    });
  }

  enableValidation() {
    const inputList = this.formElement.querySelectorAll(this.config.inputSelector);
    const buttonSubmitForm = this.formElement.querySelector(this.config.submitButtonSelector);
    this._setInputListener(inputList, buttonSubmitForm);
  }
};