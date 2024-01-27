import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance = null;

function listenForEscapeKey(event) {
        if (event.key === "Escape" && instance) {
            instance.close();
        }
}

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems.map((item) => `<div class="gallery__item">
<a class="gallery__link" href="#">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`).join("");

galleryList.innerHTML = galleryItem

galleryList.addEventListener("click", (event) => {
    event.preventDefault()

    if (event.target.dataset.source) {
        instance = basicLightbox.create(`
            <img width="1400" height="900" src="${event.target.dataset.source}">
        `, {
            onShow: (instance) => {
                document.body.addEventListener("keydown", listenForEscapeKey)
            },

            onClose: () => {
                document.body.removeEventListener("keydown", listenForEscapeKey);
            }
        });

        instance.show();
    }
});



// Change code below this line

console.log(galleryItems);
