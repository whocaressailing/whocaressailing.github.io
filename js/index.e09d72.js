(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.22.02-pm-1200.jpg':'images/screen-shot-2022-08-07-at-11.22.02-pm-600.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.24.14-pm-600.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.28.49-pm-1200.jpg':'images/screen-shot-2022-08-07-at-11.28.49-pm-600.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.06.11-pm-1200.png');
var a='data-src';var e=document.querySelector('.un1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.07.34-pm-1200.png');
var a='data-src';var e=document.querySelector('.un1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.47.42-pm-1200.png');
var a='data-src';var e=document.querySelector('.un1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.47.56-pm-1200.png');
var a='data-src';var e=document.querySelector('.un1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.48.44-pm-1200-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.35.32-pm-552.jpg':'images/screen-shot-2022-08-07-at-11.35.32-pm-276.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.37.49-pm-552.jpg':'images/screen-shot-2022-08-07-at-11.37.49-pm-276.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.34.08-pm-552.jpg':'images/screen-shot-2022-08-07-at-11.34.08-pm-276.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.22.02-pm-960.jpg':'images/screen-shot-2022-08-07-at-11.22.02-pm-480.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.24.14-pm-960.jpg':'images/screen-shot-2022-08-07-at-11.24.14-pm-480.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.28.49-pm-960.jpg':'images/screen-shot-2022-08-07-at-11.28.49-pm-480.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.06.11-pm-960.png');
var a='data-src';var e=document.querySelector('.un1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.07.34-pm-1920.png':'images/screen-shot-2022-08-07-at-11.07.34-pm-960.png');
var a='data-src';var e=document.querySelector('.un1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.47.42-pm-1920.png':'images/screen-shot-2022-08-07-at-11.47.42-pm-960.png');
var a='data-src';var e=document.querySelector('.un1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.47.56-pm-960.png');
var a='data-src';var e=document.querySelector('.un1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.48.44-pm-1920-1.png':'images/screen-shot-2022-08-07-at-11.48.44-pm-960-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.35.32-pm-442.jpg':'images/screen-shot-2022-08-07-at-11.35.32-pm-221.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.37.49-pm-440.jpg':'images/screen-shot-2022-08-07-at-11.37.49-pm-220.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.34.08-pm-442.jpg':'images/screen-shot-2022-08-07-at-11.34.08-pm-221.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.22.02-pm-768.jpg':'images/screen-shot-2022-08-07-at-11.22.02-pm-384.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.24.14-pm-768.jpg':'images/screen-shot-2022-08-07-at-11.24.14-pm-384.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.28.49-pm-768.jpg':'images/screen-shot-2022-08-07-at-11.28.49-pm-384.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.06.11-pm-768.png');
var a='data-src';var e=document.querySelector('.un1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.07.34-pm-1536.png':'images/screen-shot-2022-08-07-at-11.07.34-pm-768.png');
var a='data-src';var e=document.querySelector('.un1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.47.42-pm-1536.png':'images/screen-shot-2022-08-07-at-11.47.42-pm-768.png');
var a='data-src';var e=document.querySelector('.un1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.47.56-pm-1536.png':'images/screen-shot-2022-08-07-at-11.47.56-pm-768.png');
var a='data-src';var e=document.querySelector('.un1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.48.44-pm-1536-1.png':'images/screen-shot-2022-08-07-at-11.48.44-pm-768-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.35.32-pm-354.jpg':'images/screen-shot-2022-08-07-at-11.35.32-pm-177.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.37.49-pm-354.jpg':'images/screen-shot-2022-08-07-at-11.37.49-pm-177.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.34.08-pm-354.jpg':'images/screen-shot-2022-08-07-at-11.34.08-pm-177.jpg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.22.02-pm-822.jpg':'images/screen-shot-2022-08-07-at-11.22.02-pm-411.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.24.14-pm-776.jpg':'images/screen-shot-2022-08-07-at-11.24.14-pm-388.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.28.49-pm-626.jpg':'images/screen-shot-2022-08-07-at-11.28.49-pm-313.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.06.11-pm-480.png');
var a='data-src';var e=document.querySelector('.un1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.07.34-pm-480.png');
var a='data-src';var e=document.querySelector('.un1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.47.42-pm-480.png');
var a='data-src';var e=document.querySelector('.un1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.47.56-pm-480.png');
var a='data-src';var e=document.querySelector('.un1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.48.44-pm-480-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.35.32-pm-600.jpg':'images/screen-shot-2022-08-07-at-11.35.32-pm-300.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.37.49-pm-600-1.jpg':'images/screen-shot-2022-08-07-at-11.37.49-pm-300-1.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.34.08-pm-600.jpg':'images/screen-shot-2022-08-07-at-11.34.08-pm-300.jpg');}else{var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.22.02-pm-548.jpg':'images/screen-shot-2022-08-07-at-11.22.02-pm-274.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.24.14-pm-518.jpg':'images/screen-shot-2022-08-07-at-11.24.14-pm-259.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.28.49-pm-418.jpg':'images/screen-shot-2022-08-07-at-11.28.49-pm-209.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/screen-shot-2022-08-07-at-11.06.11-pm-320.png');
var a='data-src';var e=document.querySelector('.un1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.07.34-pm-640.png':'images/screen-shot-2022-08-07-at-11.07.34-pm-320.png');
var a='data-src';var e=document.querySelector('.un1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.47.42-pm-640.png':'images/screen-shot-2022-08-07-at-11.47.42-pm-320.png');
var a='data-src';var e=document.querySelector('.un1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.47.56-pm-640.png':'images/screen-shot-2022-08-07-at-11.47.56-pm-320.png');
var a='data-src';var e=document.querySelector('.un1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.48.44-pm-640-1.png':'images/screen-shot-2022-08-07-at-11.48.44-pm-320-1.png');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.35.32-pm-400.jpg':'images/screen-shot-2022-08-07-at-11.35.32-pm-200.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.37.49-pm-400-1.jpg':'images/screen-shot-2022-08-07-at-11.37.49-pm-200-1.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/screen-shot-2022-08-07-at-11.34.08-pm-400.jpg':'images/screen-shot-2022-08-07-at-11.34.08-pm-200.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.un1 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un51 source');ldsrcset('.un52 source');ldsrcset('.un53 source');ldsrcset('.un54 source');ldsrcset('.un55 source');ldsrcset('.un56 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}