(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/9rD":function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,a){var o,r,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="main-section-card library-section">\r\n'+(null!=(o=u(t,"if").call(i,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:8,column:11}}}))?o:"")+'    <div class="card-body">\r\n        <h3 class="card-title">'+s("function"==typeof(r=null!=(r=u(t,"title")||(null!=n?u(n,"title"):n))?r:c)?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):r)+"</h3>\r\n"+(null!=(o=u(t,"if").call(i,null!=n?u(n,"genres"):n,{name:"if",hash:{},fn:e.program(6,a,0),inverse:e.program(8,a,0),data:a,loc:{start:{line:11,column:8},end:{line:17,column:15}}}))?o:"")+'    </div>\r\n    <div class="modal-btns watched">\r\n        <button class="remove-from-watched" data-id="'+s("function"==typeof(r=null!=(r=u(t,"id")||(null!=n?u(n,"id"):n))?r:c)?r.call(i,{name:"id",hash:{},data:a,loc:{start:{line:20,column:53},end:{line:20,column:59}}}):r)+'">Remove</button>\r\n    </div>\r\n</li>\r\n'},2:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <img class="card-top-img" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(o=null!=(o=s(t,"poster_path")||(null!=n?s(n,"poster_path"):n))?o:i)?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:70},end:{line:4,column:85}}}):o)+'" data-id='+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:4,column:95},end:{line:4,column:101}}}):o)+' alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:4,column:107},end:{line:4,column:116}}}):o)+'" />\r\n'},4:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"    <img data-id="+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:6,column:17},end:{line:6,column:23}}}):o)+' class="movie-img" src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"\r\n        alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):o)+'" />\r\n'},6:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+c("function"==typeof(o=null!=(o=s(t,"genres")||(null!=n?s(n,"genres"):n))?o:i)?o.call(r,{name:"genres",hash:{},data:a,loc:{start:{line:12,column:30},end:{line:12,column:40}}}):o)+' | <span class="vote-card">'+c("function"==typeof(o=null!=(o=s(t,"vote_average")||(null!=n?s(n,"vote_average"):n))?o:i)?o.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:12,column:67},end:{line:12,column:83}}}):o)+"</span></p>\r\n\r\n"},8:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+c("function"==typeof(o=null!=(o=s(t,"release_date")||(null!=n?s(n,"release_date"):n))?o:i)?o.call(r,{name:"release_date",hash:{},data:a,loc:{start:{line:15,column:30},end:{line:15,column:46}}}):o)+' <span class="vote-card">'+c("function"==typeof(o=null!=(o=s(t,"vote_average")||(null!=n?s(n,"vote_average"):n))?o:i)?o.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:15,column:71},end:{line:15,column:87}}}):o)+"</span></p>\r\n        </p>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?o:""},useData:!0})},"Dv/5":function(e,n,t){},LnR2:function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,a){var o,r,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="main-section-card library-section">\r\n'+(null!=(o=u(t,"if").call(i,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:8,column:11}}}))?o:"")+'    <div class="card-body">\r\n        <h3 class="card-title">'+s("function"==typeof(r=null!=(r=u(t,"title")||(null!=n?u(n,"title"):n))?r:c)?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):r)+"</h3>\r\n"+(null!=(o=u(t,"if").call(i,null!=n?u(n,"genres"):n,{name:"if",hash:{},fn:e.program(6,a,0),inverse:e.program(8,a,0),data:a,loc:{start:{line:11,column:8},end:{line:17,column:15}}}))?o:"")+'    </div>\r\n    <div class="modal-btns queue">\r\n        <button class="remove-from-queue" data-id="'+s("function"==typeof(r=null!=(r=u(t,"id")||(null!=n?u(n,"id"):n))?r:c)?r.call(i,{name:"id",hash:{},data:a,loc:{start:{line:20,column:51},end:{line:20,column:57}}}):r)+'">Remove</button>\r\n    </div>\r\n</li>\r\n'},2:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <img class="card-top-img" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(o=null!=(o=s(t,"poster_path")||(null!=n?s(n,"poster_path"):n))?o:i)?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:70},end:{line:4,column:85}}}):o)+'" data-id='+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:4,column:95},end:{line:4,column:101}}}):o)+' alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:4,column:107},end:{line:4,column:116}}}):o)+'" />\r\n'},4:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"    <img data-id="+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:6,column:17},end:{line:6,column:23}}}):o)+' class="movie-img" src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"\r\n        alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):o)+'" />\r\n'},6:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+c("function"==typeof(o=null!=(o=s(t,"genres")||(null!=n?s(n,"genres"):n))?o:i)?o.call(r,{name:"genres",hash:{},data:a,loc:{start:{line:12,column:30},end:{line:12,column:40}}}):o)+' | <span class="vote-card">'+c("function"==typeof(o=null!=(o=s(t,"vote_average")||(null!=n?s(n,"vote_average"):n))?o:i)?o.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:12,column:67},end:{line:12,column:83}}}):o)+"</span></p>\r\n\r\n"},8:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+c("function"==typeof(o=null!=(o=s(t,"release_date")||(null!=n?s(n,"release_date"):n))?o:i)?o.call(r,{name:"release_date",hash:{},data:a,loc:{start:{line:15,column:30},end:{line:15,column:46}}}):o)+' <span class="vote-card">'+c("function"==typeof(o=null!=(o=s(t,"vote_average")||(null!=n?s(n,"vote_average"):n))?o:i)?o.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:15,column:71},end:{line:15,column:87}}}):o)+"</span></p>\r\n        </p>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?o:""},useData:!0})},QfWi:function(e,n,t){"use strict";t.r(n);t("Dv/5"),t("JBxO"),t("FdtR"),t("QDHd");var l=t("WTRx"),a=t.n(l);t("IlJM"),t("8cZI"),t("lmye"),t("WB5j"),t("D/wG");function o(e){var n=e.genres.slice(0,2).map((function(e){return e.name}));e.genres=n.join(", ")}var r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],i={galleryRef:document.querySelector(".main-section-wrapper"),formRef:document.querySelector(".search-form"),errorRef:document.querySelector(".error-sentence"),bodyRef:document.querySelector("body"),modalContentRef:document.querySelector(".modal-main"),backdropRef:document.querySelector(".backdrop"),myLibraryBtn:document.querySelector(".library"),headerRef:document.querySelector(".header-home"),libBtnContainer:document.querySelector(".header-library-btn-wrapper"),libModalBtn:document.querySelector(".library-modal"),watchedButton:document.querySelector(".js-watched-button"),pageContainerH:document.querySelector(".tui-pagination.home"),homeLink:document.querySelector(".home-link"),submitBtn:document.querySelector(".sign-in-btn"),createBtn:document.querySelector(".create-btn"),email:document.getElementById("email"),password:document.getElementById("password"),notification:document.querySelector(".notification"),overlay:document.querySelector(".overlay"),registrationBtn:document.querySelector(".registration-btn"),spinner:document.querySelector("#spinner"),modalHomeLink:document.querySelector("modal-home-link")},c=(t("fp7Y"),t("2c84")),s=t.n(c),u=1;function d(){i.pageContainerH.classList.add("is-hidden")}i.pageContainerH.addEventListener("click",(function(e){i.galleryRef.innerHTML="";var n=e.target;switch(n.className){case"tui-page-btn":u=Number(n.textContent),console.log(u),g(u).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-prev":u-=1,console.log(u),g(u).then((function(e){return v(e.results,r)}));break;case"tui-ico-prev":u-=1,console.log(u),g(u).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-next":u+=1,console.log(u),g(u).then((function(e){return v(e.results,r)}));break;case"tui-ico-next":u+=1,console.log(u),g(u).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-is-selected tui-first-child":return void g(u=1).then((function(e){return v(e.results,r)}));case"tui-ico-first":g(u=1).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-first":g(u=1).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-last":g(u=1e3).then((function(e){return v(e.results,r)}));break;case"tui-ico-last":g(u=1e3).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-first-child":g(u=1).then((function(e){return v(e.results,r)}));break;case"tui-page-btn tui-last-child":g(u=1e3).then((function(e){return v(e.results,r)}));break;default:g(u).then((function(e){return v(e.results,r)}))}}));var p=t("ZEAl");document.getElementById("spinner"),new p.a({lines:30,length:30,width:4,radius:13,scale:1.55,corners:0,speed:.8,rotate:41,animation:"spinner-line-shrink",direction:1,color:"#ff6b08;",fadeColor:"#ff6b08;",top:"30%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(i.spinner);function m(){i.spinner.classList.remove("is-hidden")}function f(){i.spinner.classList.add("is-hidden")}function h(e){e.preventDefault();var n=e.currentTarget,t=n.elements.query.value;i.galleryRef.innerHTML="",n.reset(),m(),function(e,n){return m(),fetch("https://api.themoviedb.org/3/search/movie?api_key=030295876ec9637cb436e167c8c73741&query="+e+"&page="+n).then((function(e){return e.json()})).finally(f())}(t).then((function(e){var n=e.results;e.total_results;v(n,r),function(e){0===e.length?i.errorRef.classList.add("is-shown"):i.errorRef.classList.remove("is-shown");d()}(n)})).finally(f())}i.formRef.addEventListener("submit",h);function g(e){return fetch("https://api.themoviedb.org/3/trending/movie/day?&page="+e+"&api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()}))}function v(e,n){!function(e,n){e.map((function(e){var t=[];if(e.genre_ids.map((function(e){var l=n.find((function(n){return n.id===e}));t.push(l.name)})),t.length>=3){var l=t.slice(0,2);l.push("Other"),e.genre_ids=l.join(", "),e.release_date=e.release_date.slice(0,4)}else e.genre_ids=t.join(", "),e.release_date&&(e.release_date=e.release_date.slice(0,4));return e}))}(e,n);var t=a()(e);i.galleryRef.insertAdjacentHTML("beforeend",t)}function y(e){m(),g(e).then((function(e){var n,t=e.results,l=e.total_results;v(t,r),n={totalItems:l,itemsPerPage:20,visiblePages:8,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},new s.a(i.pageContainerH,n)})).finally(f())}y("1"),i.homeLink.addEventListener("click",(function(){i.libBtnContainer.innerHTML="",i.libBtnContainer.insertAdjacentHTML("beforeend",'\n      <div class="wrapper-input">\n        <form class="search-form" id="search-form" autocomplete="off">\n          <label class="input-label">\n            <input class="inputtext" name="query" placeholder=" " type="text" required>\n            <span class="text-search-films">Поиск фильма</span>\n            <span class="search-icon"></span>\n          </label>\n        </form>\n      </div>\n      <p class="error-sentence">Search result is not successful. Enter the correct movie name.</p>\n      '),i.headerRef.classList.remove("header-library"),i.homeLink.classList.add("header-orange-style"),i.myLibraryBtn.classList.remove("header-orange-style"),i.galleryRef.innerHTML="",y("1"),i.pageContainerH.classList.remove("is-hidden"),document.querySelector(".search-form").addEventListener("submit",h)}));var b=t("s9S4"),k=t.n(b);t("uQK7");function w(){document.addEventListener("click",(function(e){switch(e.target.className){case"modal-btns-left":var n=localStorage.getItem("movieId");console.log(e.target),console.log("watched fired"),function(e){var n=e;null===localStorage.getItem("watched")&&localStorage.setItem("watched","[]");var t=JSON.parse(localStorage.getItem("watched"));console.log("watched",t),-1===t.indexOf(n)&&(t.push(n),localStorage.setItem("watched",JSON.stringify(t)))}(n),e.target.innerHTML="Added to watched",e.target.style.backgroundColor="#ff6b08";break;case"modal-btns-add-to-queue":var t=localStorage.getItem("movieId");console.log("queue fired"),function(e){var n=e;null===localStorage.getItem("queue")&&localStorage.setItem("queue","[]");var t=JSON.parse(localStorage.getItem("queue"));console.log("queue",t),-1===t.indexOf(n)&&(t.push(n),localStorage.setItem("queue",JSON.stringify(t)))}(t),e.target.innerHTML='Added to "QUEUE"',e.target.style.backgroundColor="#ff6b08";break;default:console.log("default")}}))}function L(){window.removeEventListener("keydown",_),i.backdropRef.classList.remove("is-open"),i.modalContentRef.innerHTML=""}function _(e){"Escape"===e.code&&L()}i.galleryRef.addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;var n=e.target.dataset.id;localStorage.setItem("movieId",n),function(e){m(),function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()}))}(e).then((function(e){return function(e){console.log(e),o(e);var n=k()(e);i.modalContentRef.insertAdjacentHTML("beforeend",n)}(e)})).catch((function(e){return console.log(e)})).finally(f())}(n),i.backdropRef.classList.add("is-open"),window.addEventListener("keydown",_),w()})),i.backdropRef.addEventListener("click",(function(e){e.target===i.backdropRef&&L()}));t("lYjL"),t("RtS0"),t("3dw1");var E=t("/9rD"),x=t.n(E);i.libBtnContainer.addEventListener("click",(function(e){if(console.log(e),"WATCHED"!==e.target.textContent)return;C(),removeFromLocalstorage()})),i.galleryRef.addEventListener("click",(function(e){if("remove-from-watched"!==e.target.className)return;console.log(e);var n=e.target.dataset.id;console.log(n);var t=localStorage.getItem("watched"),l=JSON.parse(t).filter((function(e){return e!==n}));if(localStorage.setItem("watched",JSON.stringify(l)),"[]"===localStorage.getItem("watched")||null===localStorage.getItem("watched"))return void O();i.galleryRef.innerHTML="",l.forEach((function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()})).then((function(e){S(e)})).catch((function(e){return console.log(e)}))}))})),console.log(i.libBtnContainer);var S=function(e){o(e);var n=x()({results:e});i.galleryRef.insertAdjacentHTML("beforeend",n)};function O(){i.galleryRef.textContent="Your watched list is empty!",i.galleryRef.classList.add("empty-list")}function C(){if("[]"!==localStorage.getItem("watched")&&null!==localStorage.getItem("watched")){i.galleryRef.innerHTML="";var e=localStorage.getItem("watched");JSON.parse(e).forEach((function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()})).then((function(e){return S(e)}))}))}else O()}i.myLibraryBtn.addEventListener("click",(function(e){d(),i.libBtnContainer.innerHTML="",i.libBtnContainer.insertAdjacentHTML("beforeend",'<ul class="header-library-buttons">\n  <div class="form_radio_btn button-header-library watched"">\n\t<input id="radio-1" type="radio" name="radio" value="watched" checked>\n\t<label for="radio-1">WATCHED</label>\n</div>\n \n<div class="form_radio_btn button-header-library">\n\t<input id="radio-2" type="radio" name="radio" value="queue">\n\t<label for="radio-2">QUEUE</label>\n</div>\n  </ul>'),i.headerRef.classList.add("header-library"),i.homeLink.classList.remove("header-orange-style"),i.myLibraryBtn.classList.add("header-orange-style"),i.galleryRef.innerHTML="",C()}));var I=t("LnR2"),j=t.n(I);var P=function(e){o(e);var n=j()({results:e});i.galleryRef.insertAdjacentHTML("beforeend",n)};function M(e){if("remove-from-queue"===e.target.className){var n=e.target.dataset.id,t=localStorage.getItem("queue"),l=JSON.parse(t).filter((function(e){return e!==n}));localStorage.setItem("queue",JSON.stringify(l)),"[]"!==localStorage.getItem("queue")&&null!==localStorage.getItem("queue")?(i.galleryRef.innerHTML="",l.forEach((function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()})).then((function(e){P(e)})).catch((function(e){return console.log(e)}))}))):R()}}function R(){i.galleryRef.textContent="Your queue list is empty!",i.galleryRef.classList.add("empty-list")}i.libBtnContainer.addEventListener("click",(function(e){"QUEUE"===e.target.textContent&&(!function(){if("[]"===localStorage.getItem("queue")||null===localStorage.getItem("queue"))return void R();i.galleryRef.innerHTML="";var e=localStorage.getItem("queue");JSON.parse(e).forEach((function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=030295876ec9637cb436e167c8c73741").then((function(e){return e.json()})).then((function(e){return P(e)})).catch((function(e){return console.log(e)}))}))}(),M())})),i.galleryRef.addEventListener("click",M);var q=t("Jkpm");function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}q.a.initializeApp({apiKey:"AIzaSyBSBjwfe1PBEOub-TsHsL6NYaxVd982bac",authDomain:"test-project-filmoteka.firebaseapp.com",databaseURL:"https://test-project-filmoteka-default-rtdb.firebaseio.com",projectId:"test-project-filmoteka",storageBucket:"test-project-filmoteka.appspot.com",messagingSenderId:"823123051299",appId:"1:823123051299:web:8d5804611487fb919a8296"});var B=new function(){var e=this;A(this,"handleChange",(function(n){var t=n.value,l=n.id;e.state[l]=t})),A(this,"createAccount",(function(){var n=e.state,t=n.email,l=n.password;return q.a.auth().createUserWithEmailAndPassword(t,l)})),A(this,"signInAccount",(function(){var n=e.state,t=n.email,l=n.password;return q.a.auth().signInWithEmailAndPassword(t,l)})),this.state={email:"",password:"",hasAccount:!1}};function H(){i.myLibraryBtn.style="pointer-events: auto",i.homeLink.style="pointer-events: auto",i.overlay.classList.remove("is-open"),i.registrationBtn.style="visibility: hidden;",B.state.hasAccount=!0}function T(){window.removeEventListener("keydown",D),i.overlay.classList.remove("is-open")}function N(e){e.target===i.overlay&&T()}function D(e){"Escape"===e.code&&T()}i.registrationBtn.addEventListener("click",(function(){i.overlay.addEventListener("click",N),i.overlay.classList.add("is-open"),window.addEventListener("keydown",D),i.createBtn.addEventListener("click",(function(){B.createAccount().then((function(e){return H()})).catch((function(e){i.notification.textContent="Неверный пароль или адрес электронной почты, или пользователь уже существует"}))})),i.submitBtn.addEventListener("click",(function(){B.signInAccount().then((function(e){H()})).catch((function(e){i.notification.textContent="Неверный пароль или адрес электронной почты"}))}))})),i.email.addEventListener("change",(function(){return B.handleChange(i.email)})),i.password.addEventListener("change",(function(){return B.handleChange(i.password)}))},WTRx:function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,a){var o,r,i=null!=n?n:e.nullContext||{},c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="main-section-card">\r\n'+(null!=(o=c(t,"if").call(i,null!=n?c(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:8,column:11}}}))?o:"")+'    <div class="card-body">\r\n        <h3 class="card-title">'+e.escapeExpression("function"==typeof(r=null!=(r=c(t,"title")||(null!=n?c(n,"title"):n))?r:e.hooks.helperMissing)?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):r)+"</h3>\r\n"+(null!=(o=c(t,"if").call(i,null!=n?c(n,"genre_ids"):n,{name:"if",hash:{},fn:e.program(6,a,0),inverse:e.program(8,a,0),data:a,loc:{start:{line:11,column:8},end:{line:15,column:15}}}))?o:"")+"    </div>\r\n</li>\r\n"},2:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <img class="card-top-img" src="https://image.tmdb.org/t/p/original'+c("function"==typeof(o=null!=(o=s(t,"poster_path")||(null!=n?s(n,"poster_path"):n))?o:i)?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:70},end:{line:4,column:85}}}):o)+'" data-id='+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:4,column:95},end:{line:4,column:101}}}):o)+' alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:4,column:107},end:{line:4,column:116}}}):o)+'" />\r\n'},4:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"    <img data-id="+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:6,column:17},end:{line:6,column:23}}}):o)+' class="card-top-img" src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE"\r\n        alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):o)+'" />\r\n'},6:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+c("function"==typeof(o=null!=(o=s(t,"genre_ids")||(null!=n?s(n,"genre_ids"):n))?o:i)?o.call(r,{name:"genre_ids",hash:{},data:a,loc:{start:{line:12,column:30},end:{line:12,column:43}}}):o)+" | "+c("function"==typeof(o=null!=(o=s(t,"release_date")||(null!=n?s(n,"release_date"):n))?o:i)?o.call(r,{name:"release_date",hash:{},data:a,loc:{start:{line:12,column:46},end:{line:12,column:62}}}):o)+"</p>\r\n"},8:function(e,n,t,l,a){var o,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'        <p class="card-genre">'+e.escapeExpression("function"==typeof(o=null!=(o=r(t,"release_date")||(null!=n?r(n,"release_date"):n))?o:e.hooks.helperMissing)?o.call(null!=n?n:e.nullContext||{},{name:"release_date",hash:{},data:a,loc:{start:{line:14,column:30},end:{line:14,column:46}}}):o)+"</p>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o;return null!=(o=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:18,column:9}}}))?o:""},useData:!0})},s9S4:function(e,n,t){var l=t("mp5j");e.exports=(l.default||l).template({1:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'    <img src="https://image.tmdb.org/t/p/original'+c("function"==typeof(o=null!=(o=s(t,"poster_path")||(null!=n?s(n,"poster_path"):n))?o:i)?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:49},end:{line:4,column:64}}}):o)+'" data-id='+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:4,column:74},end:{line:4,column:80}}}):o)+' alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:4,column:86},end:{line:4,column:95}}}):o)+'" />\r\n'},3:function(e,n,t,l,a){var o,r=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c=e.escapeExpression,s=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"    <img data-id="+c("function"==typeof(o=null!=(o=s(t,"id")||(null!=n?s(n,"id"):n))?o:i)?o.call(r,{name:"id",hash:{},data:a,loc:{start:{line:6,column:17},end:{line:6,column:23}}}):o)+' src="https://dummyimage.com/400x600/cfcfcf/ffffff&text=NO+IMAGE+AVAILABLE" alt="'+c("function"==typeof(o=null!=(o=s(t,"title")||(null!=n?s(n,"title"):n))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:6,column:104},end:{line:6,column:113}}}):o)+'" />\r\n'},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var o,r,i=null!=n?n:e.nullContext||{},c=e.hooks.helperMissing,s="function",u=e.escapeExpression,d=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<div class="modal-main-left">\r\n  <div class="thumbnail_film">\r\n'+(null!=(o=d(t,"if").call(i,null!=n?d(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a,loc:{start:{line:3,column:4},end:{line:7,column:11}}}))?o:"")+'  </div>\r\n</div>\r\n<div class="modal-main-right">\r\n  <h2>'+u(typeof(r=null!=(r=d(t,"title")||(null!=n?d(n,"title"):n))?r:c)===s?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:11,column:6},end:{line:11,column:15}}}):r)+'</h2>\r\n  <ul class="modal-film-info">\r\n    <li>\r\n      <div>Vote / Votes</div>\r\n      <div><span class="modal-vote">'+u(typeof(r=null!=(r=d(t,"vote_average")||(null!=n?d(n,"vote_average"):n))?r:c)===s?r.call(i,{name:"vote_average",hash:{},data:a,loc:{start:{line:15,column:36},end:{line:15,column:52}}}):r)+"</span> <span>/</span> "+u(typeof(r=null!=(r=d(t,"vote_count")||(null!=n?d(n,"vote_count"):n))?r:c)===s?r.call(i,{name:"vote_count",hash:{},data:a,loc:{start:{line:15,column:75},end:{line:15,column:89}}}):r)+"</div>\r\n    </li>\r\n    <li>\r\n      <div>Popularity</div>\r\n      <div>"+u(typeof(r=null!=(r=d(t,"popularity")||(null!=n?d(n,"popularity"):n))?r:c)===s?r.call(i,{name:"popularity",hash:{},data:a,loc:{start:{line:19,column:11},end:{line:19,column:25}}}):r)+"</div>\r\n    </li>\r\n    <li>\r\n      <div>Original Title</div>\r\n      <div>"+u(typeof(r=null!=(r=d(t,"original_title")||(null!=n?d(n,"original_title"):n))?r:c)===s?r.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:23,column:11},end:{line:23,column:29}}}):r)+"</div>\r\n    </li>\r\n    <li>\r\n      <div>Genre</div>\r\n      <div>"+u(typeof(r=null!=(r=d(t,"genres")||(null!=n?d(n,"genres"):n))?r:c)===s?r.call(i,{name:"genres",hash:{},data:a,loc:{start:{line:27,column:11},end:{line:27,column:21}}}):r)+'</div>\r\n    </li>\r\n  </ul>\r\n  <div class="title">About </div>\r\n  <div class="discription">\r\n    '+u(typeof(r=null!=(r=d(t,"overview")||(null!=n?d(n,"overview"):n))?r:c)===s?r.call(i,{name:"overview",hash:{},data:a,loc:{start:{line:32,column:4},end:{line:32,column:16}}}):r)+'\r\n  </div>\r\n  <div class="modal-btns">\r\n\r\n    <button class="modal-btns-left">Add to "WATCHED"</button>\r\n    <button class="modal-btns-add-to-queue">Add to "QUEUE"</button>\r\n\r\n  </div>\r\n\r\n</div>'},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.fa24034d1e97e991641f.js.map