const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/lake.jpg"
  },
  {
    name: "Parque Nacional Torres del Paine",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/yosemite.jpg"
  },
  {
    name: "Camino de los Dioses",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/chicago.jpg"
  },
  {
    name: "Valle de la Luna",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/baikal.jpg"
  },
  {
    name: "Glaciar Perito Moreno",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/kamchatka.jpg"
  },
  {
    name: "Parque Nacional Los Glaciares",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-plus/cards/karjala.jpg"
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

// Close Edit Profile modal
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// Close New Post modal
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
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

  // Logic to handle the new card creation would go here
  console.log("Image Link:", cardImageInput.value);
  console.log("Caption:", cardCaptionInput.value);

  // Clear the form inputs
  evt.target.reset();

  closeModal(newPostModal);
});