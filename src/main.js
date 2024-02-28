import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { addMarkup } from "./js/render-functions";
import { loading } from "./js/render-functions";

const galleryForm = document.querySelector(".gallery-form");
const search = document.querySelector(".gallery-search")
const galleryList = document.querySelector(".gallery")
let images;
const option = {
    overlayOpacity: 0.8,
    captionsData: 'alt',
    captionDelay: 250,
  };

let gallery = new SimpleLightbox('.gallery a', option);

galleryForm.addEventListener("submit", event => {
    event.preventDefault();
    if(search.value.trim() ===""){
        return;
    }
    galleryList.innerHTML = "";
    loading(galleryList)
    images = getImages(search.value.trim());
    images.then(data => {
        if(!data.total){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            
        }else{
            galleryList.insertAdjacentHTML("beforeend", addMarkup(data.hits));
            gallery.refresh();
        }
    }).finally(() => document.querySelector('.loader').remove())
})


