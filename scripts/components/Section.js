export default class Section {
  constructor({ item, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._item = item;
  }

  renderItem() {
    this._item.forEach((item) => {
      this._renderer(item);
    })
  }
  
  addItem(element) {
    this._container.append(element);
  }
}