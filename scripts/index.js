const profile = document.querySelector('.profile'); 

const editProfileButton = profile.querySelector('.profile__edit-button'); 

const popupOpened = document.querySelector('.popup'); 

const closeEditButton = popupOpened.querySelector('.popup__close-button'); 
 
const nameProfile = profile.querySelector('.profile__name'); 

const jobProfile = profile.querySelector('.profile__job'); 

const formElement = popupOpened.querySelector('.popup__form'); 

const nameInput = formElement.querySelector('.popup__input_type_name'); 

const jobInput = formElement.querySelector('.popup__input_type_job'); 
 
function openModal() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
  popupOpened.classList.add('popup_opened') 
}

function closeModal(){ 
  popupOpened.classList.remove('popup_opened') 
}; 

function handleFormSubmit(evt) { 
  evt.preventDefault(); 
  nameProfile.textContent = nameInput.value 
  jobProfile.textContent = jobInput.value 
  closeModal() 
}; 

editProfileButton.addEventListener('click', openModal); 

closeEditButton.addEventListener('click', closeModal); 

formElement.addEventListener('submit', handleFormSubmit); 