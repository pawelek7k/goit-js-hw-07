import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance = null;

document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance) {
        instance.close();
    }
});
const galleryList = document.querySelector(".gallery");

for (let item of galleryItems) {
    const galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href="#">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`

  galleryList.innerHTML += galleryItem
}

galleryList.addEventListener("click", (event) => {
    event.preventDefault()

    if (event.target.dataset.source) {
        instance = basicLightbox.create(`
            <img width="1400" height="900" src="${event.target.dataset.source}">
        `);

        instance.element().addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                instance.close();
            }
        });

        instance.show();
    }
})


// Change code below this line

console.log(galleryItems);