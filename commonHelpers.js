import{i as c,S as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const u="42562534-6abe2af4317b1372b4a8ab981";function f(i){return fetch("https://pixabay.com/api/?key="+u+"&q="+i+"&image_type=photo&orientation=horizontal&safesearch=true").then(t=>{if(!t.ok)throw new Error("Error image");return t.json()}).catch(t=>alert(t))}function p(i){return i.map(t=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${t.previewURL}" 
                alt="${t.tags}" 
                />
        </a>
    <ul class="statistic-list">
      <li class="statistic-item">
        <h3 class="statistic-title">Likes</h3>
        <p class="statistic-info">${t.likes}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Views</h3>
        <p class="statistic-info">${t.views}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Comments</h3>
        <p class="statistic-info">${t.comments}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Downloads</h3>
        <p class="statistic-info">${t.downloads}</p>
      </li>
    </ul>
  </li>`).join("")}const m=document.querySelector(".gallery-form"),d=document.querySelector(".gallery-search"),g=document.querySelector(".gallery");let a;const h={overlayOpacity:.8,captionsData:"alt",captionDelay:250};m.addEventListener("submit",i=>{i.preventDefault(),a=f(d.value),a.total||c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.then(t=>{g.insertAdjacentHTML("beforeend",p(t.hits))})});new n(".gallery a",h);
//# sourceMappingURL=commonHelpers.js.map
