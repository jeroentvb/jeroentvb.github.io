(()=>{if(document.querySelector(".load-more-button")){const e=document.querySelector(".load-more-button"),t=document.getElementsByClassName("more-work");e.addEventListener("click",(e=>function(e,t){const o={more:e.target.dataset.moreWork,less:e.target.dataset.lessWork};t[0].classList.contains("hidden")?e.target.textContent=o.less:e.target.textContent=o.more;for(let e=0;e<t.length;e++)t[e].classList.toggle("hidden")}(e,t)))}if(document.documentElement.scrollIntoView){const e=document.getElementsByClassName("menu-item");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(o=>{o.preventDefault();document.getElementById(e[t].href.split("#")[1]).scrollIntoView({behavior:"smooth"})}))}})();