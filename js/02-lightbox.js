import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

for (let item of galleryItems) {
  const galleryItem = `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"
      o="${item.captionDelay}" data-source="${item.original}"/>
      </a>
      </li>`;

  galleryList.innerHTML += galleryItem;
}

var images = document.querySelectorAll(".gallery img");
images.forEach(image => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    const lightbox = new SimpleLightbox(".gallery a", {
      /* options */
    });
  });
});


// // Change code below this line

// console.log(galleryItems);

