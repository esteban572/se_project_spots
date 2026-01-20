// Profile elements
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const newPostButton = document.querySelector(".profile__add-button");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

// Modal close buttons
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Edit Profile form elements
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

// New Post form elements
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");

// Modal helper functions
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Open Edit Profile modal and pre-fill form with current values
editProfileButton.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});

// Open New Post modal
newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

// Close Edit Profile modal
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// Close New Post modal
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

// Handle Edit Profile form submission
editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
});

// Handle New Post form submission
newPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // Logic to handle the new card creation would go here
  console.log("Image Link:", cardImageInput.value);
  console.log("Caption:", cardCaptionInput.value);

  // Clear the form inputs
  evt.target.reset();

  closeModal(newPostModal);
});