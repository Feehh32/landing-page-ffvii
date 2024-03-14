(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,i){if(e){if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:String(e)}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){function t(n,o){i(this,t),this.linksList=e(document.querySelectorAll(n)),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}return s(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addEventLink",value:function(){var t=this;this.linksList.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksList.length&&(this.linksList.pop(),this.addEventLink()),this}}]),t}();function c(t,e){var i;return function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];i&&clearTimeout(i),i=setTimeout((function(){t.apply(void 0,o),i=null}),e)}}var l=function(){function t(e){i(this,t),this.sections=document.querySelectorAll(e),this.halfWindow=.6*window.innerHeight,this.checkDistance=c(this.checkDistance.bind(this),100)}return s(t,[{key:"getDistance",value:function(){var t=this;this.distance=e(this.sections).map((function(e){var i=e.offsetTop;return{element:e,offset:Math.floor(i)-t.halfWindow}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.scrollY>t.offset&&t.element.classList.add("active")}))}},{key:"addEventOnWindow",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addEventOnWindow()),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),t}();function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(){function t(e,n){i(this,t),this.slide=document.querySelector(e),this.wrapper=document.querySelector(n),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}return s(t,[{key:"transition",value:function(t){this.slide.style.transition=t?"transform .3s":""}},{key:"moveSlide",value:function(t){this.dist.movePosition=t,this.slide.style.transform="translate3d(".concat(t,"px, 0, 0)")}},{key:"updatePosition",value:function(t){return this.dist.movement=1.4*(t-this.dist.startX),this.dist.finalPosition+this.dist.movement}},{key:"onStart",value:function(t){var e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}},{key:"onMove",value:function(t){var e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}},{key:"onEnd",value:function(t){var e="mouseup"===t.type?"mousemove":"touchemove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}},{key:"changeSlideOnEnd",value:function(){this.dist.movement>120&&void 0!==this.index.prev?this.activePrevSlide():this.dist.movement<-120&&void 0!==this.index.next?this.activeNextSlide():this.changeSlide(this.index.active)}},{key:"addSlideEvents",value:function(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}},{key:"slidePosition",value:function(t){var e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}},{key:"slidesConfig",value:function(){var t=this;this.slideArray=e(this.slide.children).map((function(e){return{element:e,position:t.slidePosition(e)}}))}},{key:"slidesIndexNav",value:function(t){var e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}},{key:"changeSlide",value:function(t){var e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}},{key:"changeActiveClass",value:function(){var t=this;this.slideArray.forEach((function(e){return e.element.classList.remove(t.activeClass)})),this.slideArray[this.index.active].element.classList.add(this.activeClass)}},{key:"activePrevSlide",value:function(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}},{key:"activeNextSlide",value:function(){void 0!==this.index.next&&this.changeSlide(this.index.next)}},{key:"onResize",value:function(){var t=this;setTimeout((function(){t.slidesConfig(),t.changeSlide(t.index.active)}),1e3)}},{key:"addResizeEvent",value:function(){window.addEventListener("resize",this.onResize)}},{key:"bindEvents",value:function(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=c(this.onResize.bind(this),200),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}},{key:"init",value:function(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(2),this}}]),t}();function v(t,e,i){return e=u(e),function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,i||[],u(t).constructor):e.apply(t,i))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}var y=function(t){function n(t,e){var o;return i(this,n),(o=v(this,n,[t,e])).bindControlEvents(),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(n,t),s(n,[{key:"addArrow",value:function(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}},{key:"addArrowEvent",value:function(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}},{key:"createControl",value:function(){var t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach((function(e,i){t.innerHTML+='<li><a href="#slide'.concat(i+1,'">').concat(i+1,"</li>")})),this.wrapper.appendChild(t),t}},{key:"eventControl",value:function(t,e){var i=this;t.addEventListener("click",(function(t){t.preventDefault(),i.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}},{key:"activeControlItem",value:function(){var t=this;this.controlArray.forEach((function(e){return e.classList.remove(t.activeClass)})),this.controlArray[this.index.active].classList.add(this.activeClass)}},{key:"addControl",value:function(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=e(this.control.children),this.activeControlItem(),this.controlArray.forEach(this.eventControl)}},{key:"bindControlEvents",value:function(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}]),n}(d);new a("[data-links] li a").init(),new l("[data-anime='scroll']").init();var p=new y("[data-slide]","[data-slide-wrapper]");p.init(),p.addArrow(".screenshots-prev",".screenshots-next"),p.addControl()})();