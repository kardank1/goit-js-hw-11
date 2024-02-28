import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p="42562534-6abe2af4317b1372b4a8ab981";function m(i){let e=i;return i.includes(" ")&&(e=i.split(" ").join("+")),fetch("https://pixabay.com/api/?key="+p+"&q="+e+"&image_type=photo&orientation=horizontal&safesearch=true").then(r=>{if(!r.ok)throw new Error("Error image");return r.json()}).catch(r=>alert(r))}function d(i){return i.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img 
                class="gallery-image" 
                src="${e.previewURL}" 
                alt="${e.tags}" 
                />
        </a>
    <ul class="statistic-list">
      <li class="statistic-item">
        <h3 class="statistic-title">Likes</h3>
        <p class="statistic-info">${e.likes}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Views</h3>
        <p class="statistic-info">${e.views}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Comments</h3>
        <p class="statistic-info">${e.comments}</p>
      </li>
      <li class="statistic-item">
        <h3 class="statistic-title">Downloads</h3>
        <p class="statistic-info">${e.downloads}</p>
      </li>
    </ul>
  </li>`).join("")}function y(i){i.innerHTML='<span class="loader"></span>'}const g=document.querySelector(".gallery-form"),c=document.querySelector(".gallery-search"),l=document.querySelector(".gallery");let n;const h={overlayOpacity:.8,captionsData:"alt",captionDelay:250};let L=new u(".gallery a",h);g.addEventListener("submit",i=>{i.preventDefault(),c.value.trim()!==""&&(l.innerHTML="",y(l),n=m(c.value.trim()),n.then(e=>{e.total?(l.insertAdjacentHTML("beforeend",d(e.hits)),L.refresh()):f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>document.querySelector(".loader").remove()))});
//# sourceMappingURL=commonHelpers.js.map
