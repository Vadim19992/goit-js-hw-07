import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgConteiner = document.querySelector('.gallery');

const imgMarkup = markupCreation(galleryItems);

imgConteiner.insertAdjacentHTML('beforeend', imgMarkup);

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

imgConteiner.addEventListener('click', selectImg);

function selectImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const gallery = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionsDelay: 250,
  });
  imgConteiner.removeEventListener('click', onclick);
  console.log(e.target);
  console.log(e.currentTarget);
  const imgSrc = e.target.dataset.source;
  console.log(imgSrc);

  //   gallery.open({ source: imgSrc });
  //   console.log(gallery);
  //   const lightbox = new SimpleLightbox('.gallery__link', {
  //     captionsData: 'alt',
  //     captionDelay: '250',
  //   });
  //   lightbox.removeEventListener('click', onclick);
}
