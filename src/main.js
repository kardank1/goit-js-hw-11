import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { addMarkup } from "./js/render-functions";

const galleryForm = document.querySelector(".gallery-form");
const search = document.querySelector(".gallery-search")
const galleryList = document.querySelector(".gallery")
let images;
const option = {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
  };

galleryForm.addEventListener("submit", event => {
    event.preventDefault();
    images = getImages(search.value);
    if(!images.total){
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
    }
    // document.body.insertAdjacentHTML("beforeend", addMarkup(images.hits));
    images.then(data => {
        galleryList.insertAdjacentHTML("beforeend", addMarkup(data.hits));
    })
})

let gallery = new SimpleLightbox('.gallery a', option);

