const profile = document.querySelector('.profile');

const editProfileButton = profile.querySelector('.profile__edit-button');

const popupOpened = document.querySelector('.popup');

editProfileButton.addEventListener('click', function openModal(){
  popupOpened.classList.add('popup_opened')
});

const closeEditButton = popupOpened.querySelector('.popup__close-button');

function closeModal(){
  popupOpened.classList.remove('popup_opened')
}

closeEditButton.addEventListener('click', closeModal);

const saveEditButton = popupOpened.querySelector('.poput__save-button');

const nameProfile = profile.querySelector('.profile__name');

const jobProfile = profile.querySelector('.profile__job');

const formElement = popupOpened.querySelector('.popup__wrapper');

const nameInput = formElement.querySelector('.popup__input_name');

const jobInput = formElement.querySelector('.popup__input_job');

function handleFormSubmit(evt) {
  evt.preventDefault();
  if (nameInput.value.length > 0) {
    nameProfile.textContent = (`${nameInput.value}`)
  } else {nameInput.value = nameProfile.innerText}
  
  if (jobInput.value.length > 0) {
    jobProfile.textContent = (`${jobInput.value}`)
  } else {jobInput.value = jobProfile.innerText}
  closeModal()
}

formElement.addEventListener('submit', handleFormSubmit);