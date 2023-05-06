(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var r=function(){function t(e,r,o,i){var a,u,c,l=this,s=o.handleCardImageClick,f=o.handleDeleteButtonClick,p=o.handleLikeButtonClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,c=function(){return l._cardTitleElement.textContent=l._data.name,l._cardImageElement.src=l._data.link,l._cardImageElement.alt="Фотография места ".concat(l._data.name),l.setLikesState(l._data.likes),l._disableDeleteButton(),l._setEventListeners(),l.setLikeCounter(l._data),l._card},(u=n(u="generateCard"))in a?Object.defineProperty(a,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[u]=c,this._data=e,this.cardID=e._id,this._userID=r,this._handleCardImageClick=s,this._handleDeleteCard=f,this._handleLikeButtonClick=p,this._templateSelector=i,this._card=this._getTemplate(),this._cardTitleElement=this._card.querySelector(".card__title"),this._cardImageElement=this._card.querySelector(".card__image"),this._cardLikeButton=this._card.querySelector(".card__button-like"),this._cardDeleteButton=this._card.querySelector(".card__button-delete")}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"removeCard",value:function(){this._card.remove()}},{key:"hasMyLike",value:function(t){var e=this;return t.some((function(t){return t._id===e._userID}))}},{key:"setLikeCounter",value:function(t){this._card.querySelector(".card__like-counter").textContent=t.likes.length}},{key:"_setEventListeners",value:function(){var t=this;this._cardDeleteButton.addEventListener("click",(function(){t._handleDeleteCard(t)})),this._cardImageElement.addEventListener("click",(function(){t._handleCardImageClick(t._data.link,t._data.name)})),this._cardLikeButton.addEventListener("click",(function(){t._handleLikeButtonClick(t)}))}},{key:"_disableDeleteButton",value:function(){this._data.owner._id!=this._userID&&this._cardDeleteButton.classList.add("card__button-delete_disabled")}},{key:"setLikesState",value:function(t){this._data.likes=t,this.hasMyLike(t)?this._cardLikeButton.classList.add("card__button-like_active"):this._cardLikeButton.classList.remove("card__button-like_active")}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=e,this.formElement=n,this._inputList=n.querySelectorAll(this.config.inputSelector),this._formSubmitButton=n.querySelector(this.config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){e.classList.add(this.config.inputErrorClass),t.classList.add(this.config.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(t,e){e.classList.remove(this.config.inputErrorClass),t.classList.remove(this.config.errorClass),t.textContent=""}},{key:"_checkInputValidation",value:function(t,e){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_hasValidityInput",value:function(t){return t.every((function(t){return t.validity.valid}))}},{key:"_enableButton",value:function(){this._formSubmitButton.classList.remove(this.config.inactiveButtonClass),this._formSubmitButton.removeAttribute("disabled","disabled")}},{key:"disableButton",value:function(){this._formSubmitButton.classList.add(this.config.inactiveButtonClass),this._formSubmitButton.setAttribute("disabled","disabled")}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){var n=t.formElement.querySelector(".".concat(e.name,"-error"));t._hideInputError(n,e)}))}},{key:"_toggleButtonState",value:function(t){t?this._enableButton():this.disableButton()}},{key:"_setInputListener",value:function(){var t=this,e=Array.from(this._inputList);this._inputList.forEach((function(n){var r=t.formElement.querySelector(".".concat(n.name,"-error"));n.addEventListener("input",(function(){var o=t._hasValidityInput(e);t._checkInputValidation(n,r),t._toggleButtonState(o)}))}))}},{key:"enableValidation",value:function(){this._setInputListener()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"renderItem",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._closeButton=this._element.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._element.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&t.close()})),this._closeButton.addEventListener("mousedown",(function(){t.close()}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._buttonConfirAction=e._element.querySelector(".popup__button"),e}return e=a,(n=[{key:"setSubmitAction",value:function(t){this._handleSubmitCallBack=t}},{key:"setEventListeners",value:function(t){var e=this;return this._buttonConfirAction.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmitCallBack()})),d(b(a.prototype),"setEventListeners",this).call(this)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(p),_={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._element.querySelector(".popup__image"),e._subtitle=e._element.querySelector(".popup__subtitle"),e}return e=a,(n=[{key:"open",value:function(t,e){return this._image.src=t,this._image.alt="Фотография из места ".concat(e),this._subtitle.textContent=e,k(E(a.prototype),"open",this).call(this)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(p);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=r,n._form=n._element.querySelector(_.formSelector),n._inputList=n._element.querySelectorAll(_.inputSelector),n._submitButton=n._element.querySelector(_.submitButtonSelector),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"changeButtonText",value:function(t){this._submitButton.textContent=t?"Загрузка...":"Сохранить"}},{key:"setEventListeners",value:function(){var t=this;return this._form.addEventListener("submit",(function(e){e.preventDefault(),t._getInputValues(),t._handleFormSubmit(t._formValues)})),O(I(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){return this._form.reset(),O(I(a.prototype),"close",this).call(this)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(p);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e}var e,n;return e=t,(n=[{key:"_getResponseData",value:function(t){if(t.ok)return t.json();Promise.reject(t.status)}},{key:"getInitialUserInfo",value:function(){var t=this;return fetch(this._config.user,{method:"GET",headers:{authorization:this._config.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch(this._config.cards,{method:"GET",headers:{authorization:this._config.authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch(this._config.user,{method:"PATCH",headers:{authorization:this._config.authorization,"Content-type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._getResponseData(t)}))}},{key:"editUserAvatar",value:function(t){var e=this;return fetch("".concat(this._config.user,"/avatar"),{method:"PATCH",headers:{authorization:this._config.authorization,"Content-type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._getResponseData(t)}))}},{key:"createNewCard",value:function(t){var e=this;return fetch(this._config.cards,{method:"POST",headers:{authorization:this._config.authorization,"Content-type":"application/json"},body:JSON.stringify({name:t.title,link:t.link})}).then((function(t){return e._getResponseData(t)}))}},{key:"likeThisCard",value:function(t){var e=this;return fetch("".concat(this._config.cards,"/").concat(t.cardID,"/likes"),{method:"PUT",headers:{authorization:this._config.authorization,"Content-type":"application/json"}}).then((function(t){return e._getResponseData(t)}))}},{key:"unlikeThisCard",value:function(t){var e=this;return fetch("".concat(this._config.cards,"/").concat(t.cardID,"/likes"),{method:"DELETE",headers:{authorization:this._config.authorization,"Content-type":"application/json"}}).then((function(t){return e._getResponseData(t)}))}},{key:"removeThisCard",value:function(t){var e=this;return fetch("".concat(this._config.cards,"/").concat(t.cardID),{method:"DELETE",headers:{authorization:this._config.authorization,"Content-type":"application/json"}}).then((function(t){return e._getResponseData(t)}))}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var A=function(){function t(e){var n=e.nameProfileSelector,r=e.aboutProfileSelector,o=e.avatarProfileSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=document.querySelector(n),this._aboutProfile=document.querySelector(r),this._avatarProfile=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._nameProfile.textContent,t.about=this._aboutProfile.textContent,t.avatar=this._avatarProfile.src,t}},{key:"setUserInfo",value:function(t){this._nameProfile.textContent=t.name,this._aboutProfile.textContent=t.about,this._avatarProfile.src=t.avatar}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),V=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__button-edit-image"),F="#card-template";function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M,J=null,G=new D({user:"https://nomoreparties.co/v1/cohort-63/users/me",cards:"https://mesto.nomoreparties.co/v1/cohort-63/cards",authorization:"1259cec5-ebd0-4aff-9c06-6fdb6fbb94dd"}),H=new l({renderer:function(t){var e=K(t);H.addItem(e)}},".elements"),$={};function K(t){var e=new r(t,J,{handleCardImageClick:function(t,e){W.open(t,e)},handleDeleteButtonClick:function(t){X.open(),X.setSubmitAction((function(){G.removeThisCard(t).then((function(){t.removeCard(),X.close()})).catch((function(t){console.log("Произошла ошибка ".concat(t))}))}))},handleLikeButtonClick:function(t){e.hasMyLike(t._data.likes)?G.unlikeThisCard(t).then((function(t){e.setLikeCounter(t),e.setLikesState(t.likes)})).catch((function(t){console.log("Ошибка ".concat(t))})):G.likeThisCard(t).then((function(t){e.setLikeCounter(t),e.setLikesState(t.likes)})).catch((function(t){console.log("Ошибка ".concat(t))}))}},F);return e.generateCard()}M=_,Array.from(document.querySelectorAll(M.formSelector)).forEach((function(t){var e=new a(M,t),n=t.getAttribute("name");$[n]=e,e.enableValidation()})),Promise.all([G.getInitialUserInfo(),G.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];J=o._id,Q.setUserInfo(o),H.renderItem(i)})).catch((function(t){console.log("Произошла ошибка ".concat(t))}));var Q=new A({nameProfileSelector:".profile__name",aboutProfileSelector:".profile__about",avatarProfileSelector:".profile__image"});Q.getUserInfo();var W=new P(".popup_type_image-view");W.setEventListeners();var X=new m(".popup_type_confirm-delete");X.setEventListeners();var Y=new B(".popup_type_add-card",{handleFormSubmit:function(t){Y.changeButtonText(!0),G.createNewCard(t).then((function(t){var e=K(t);H.addItem(e),Y.close()})).catch((function(t){console.log("Произошла ошибка ".concat(t))})).finally((function(){Y.changeButtonText(!1)}))}});Y.setEventListeners();var Z=new B(".popup_type_profile",{handleFormSubmit:function(t){Z.changeButtonText(!0),G.editUserInfo(t).then((function(t){Q.setUserInfo(t),Z.close()})).catch((function(t){console.log("Ошибка ".concat(t))})).finally((function(){Z.changeButtonText(!1)}))}});Z.setEventListeners();var tt=new B(".popup_type_edit-avatar",{handleFormSubmit:function(t){tt.changeButtonText(!0),G.editUserAvatar(t).then((function(t){Q.setUserInfo(t),tt.close()})).catch((function(t){console.log("Ошибка ".concat(t))})).finally((function(){tt.changeButtonText(!1)}))}});tt.setEventListeners(),z.addEventListener("click",(function(){$["card-add"].resetValidation(),Y.open()})),V.addEventListener("click",(function(){$["profile-info"].resetValidation(),Z.open();var t=Q.getUserInfo();Z.setInputValues(t)})),U.addEventListener("click",(function(){$["avatar-edit"].resetValidation(),tt.open()}))})();
//# sourceMappingURL=main.js.map