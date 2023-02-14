const showInputError = (errorElement, inputElement, config) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (errorElement, inputElement, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

 const hasValidityInput = (inputList) => {
  return inputList.every((inputElement)=> {
    return inputElement.validity.valid;
  });
};

const enableButton = (button, config) => {
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute('disabled', 'disabled');
};

const disableButton = (buttonSubmitForm, config) => {
  buttonSubmitForm.classList.add(config.inactiveButtonClass);
  buttonSubmitForm.setAttribute('disabled', 'disabled');
};

const toggleButtonState = (buttonSubmitForm, config, buttonState) => {
  if (buttonState) {
    enableButton(buttonSubmitForm, config);
  } else {
    disableButton(buttonSubmitForm, config);
  };
};

const checkInputValidation = (inputElement, errorElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(errorElement, inputElement, config);
  } else {
    hideInputError(errorElement, inputElement, config);
  };
};

const setInputListener = (inputList, formElement, buttonSubmitForm, config) => {
  const inputs = Array.from(inputList);
  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    if (inputElement.name === 'name' || inputElement.name === 'job') {
      checkInputValidation(inputElement, errorElement, config);
    };
    
    inputElement.addEventListener('input', (evt) => {
      const buttonState = hasValidityInput(inputs);
      checkInputValidation(inputElement, errorElement, config);
      toggleButtonState(buttonSubmitForm, config, buttonState);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const buttonSubmitForm = formElement.querySelector(config.submitButtonSelector);
    setInputListener(inputList, formElement, buttonSubmitForm, config);
  });
};

