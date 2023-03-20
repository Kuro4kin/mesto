import Popup from './Popup.js'
import { validationConfig } from '../utils/constant.js';

 export default class PopupWithImage extends Popup {  
  constructor(selector) {
    super(selector)
    this._image = this._element.querySelector('.popup__image');
    this._subtitle = this._element.querySelector('.popup__subtitle')
  }

  open(placeImgLink, placeName) {
    this._image.src = placeImgLink;
    this._image.alt = `Фотография из места ${placeName}`;
    this._subtitle.textContent = placeName;
    return super.open();
  }
}


 
