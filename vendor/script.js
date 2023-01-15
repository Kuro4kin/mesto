const profile = document.querySelector('.profile');

const editProfileButton = profile.querySelector('.profile__edit-button');

const popupOpened = document.querySelector('.popup');

editProfileButton.addEventListener('click', function openModal(){
  popupOpened.classList.add('popup_opened')
});

const closeEditButton = popupOpened.querySelector('.popup__close-button');

function closeModal(){
  popupOpened.classList.remove('popup_opened')
};

closeEditButton.addEventListener('click', closeModal);

const saveEditButton = popupOpened.querySelector('.poput__save-button');

const namePofile = profile.querySelector('.profile__name');

const jobPofile = profile.querySelector('.profile__job');

const formElement = popupOpened.querySelector('.popup__container');

const nameInput = formElement.querySelector('.popup__input_name');

const jobInput = formElement.querySelector('.popup__input_job');

function handleFormSubmit(evt) {
  evt.preventDefault();
  if (nameInput.value.length > 0) {
    namePofile.textContent = (`${nameInput.value}`)
  } else {
    nameInput.value = namePofile.innerText
  }
  if (jobInput.value.length > 0) {
    jobPofile.textContent = (`${jobInput.value}`)
  } else {
    jobInput.value = jobPofile.innerText
  }
  closeModal()
};

saveEditButton.addEventListener('click', handleFormSubmit);
