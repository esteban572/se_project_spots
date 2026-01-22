const initialCards = [
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Restaurant terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "A very long bridge, over the forest",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];

// Profile elements
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const newPostButton = document.querySelector(".profile__add-button");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

// Modal elements
const modals = document.querySelectorAll(".modal");

// Edit Profile form elements
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

// New Post form elements
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");

// Cards related elements
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

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

// Set up close button listeners
modals.forEach(function (modal) {
  const closeButton = modal.querySelector(".modal__close-btn");
  closeButton.addEventListener("click", function () {
    closeModal(modal);
  });
});

// Card functions
function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  return cardElement;
}

initialCards.forEach(function (card) {
  console.log(card.name);
  const cardElement = createCard(card);
  cardsContainer.appendChild(cardElement);
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

  const newCardData = {
    name: cardCaptionInput.value,
    link: cardImageInput.value,
  };

  console.log("New Post Data:", newCardData);

  // Clear the form inputs
  evt.target.reset();

  closeModal(newPostModal);
});