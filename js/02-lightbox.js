import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgConteiner = document.querySelector('.gallery');

const imgMarkup = markupCreation(galleryItems);

imgConteiner.insertAdjacentHTML('beforeend', imgMarkup);
const gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionsDelay: 250,
});
function markupCreation(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join('');
}
