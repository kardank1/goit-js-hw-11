import{S as n,i as u}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f="42562534-6abe2af4317b1372b4a8ab981";function p(i){let e=i;return i.includes(" ")&&(e=i.split(" ").join("+")),fetch("https://pixabay.com/api/?key="+f+"&q="+e+"&image_type=photo&orientation=horizontal&safesearch=true").then(r=>{if(!r.ok)throw new Error("Error image");return r.json()}).catch(r=>alert(r))}function m(i){return i.map(e=>`
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
  </li>`).join("")}function d(i){i.innerHTML='<span class="loader"></span>'}const g=document.querySelector(".gallery-form"),y=document.querySelector(".gallery-search"),l=document.querySelector(".gallery");let o;const h={overlayOpacity:.8,captionsData:"alt",captionDelay:250};let L=new n(".gallery a",h);g.addEventListener("submit",i=>{i.preventDefault(),l.innerHTML="",d(l),o=p(y.value.trim()),console.log(o),o.then(e=>{e.total?(l.insertAdjacentHTML("beforeend",m(e.hits)),L.refresh()):u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>document.querySelector(".loader").remove())});
//# sourceMappingURL=commonHelpers.js.map
