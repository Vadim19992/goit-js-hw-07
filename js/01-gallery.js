import { galleryItems } from './gallery-items.js';
// Change code below this line
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

const imgConteiner = document.querySelector('.gallery');

const imgMarkup = markupCreation(galleryItems);

imgConteiner.insertAdjacentHTML('beforeend', imgMarkup);

function markupCreation(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join('');
}

imgConteiner.addEventListener('click', selectImg);

function selectImg(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.currentTarget);
  const imgSrc = e.target.dataset.source;
  // console.log(imgSrc);

  const instance = basicLightbox.create(`<img src="${imgSrc}">`);

  instance.show();
  const closeOnEscape = event => {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeOnEscape);
    }
  };
  window.addEventListener('keydown', closeOnEscape);
}
