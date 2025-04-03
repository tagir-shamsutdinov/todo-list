export default class ClearBasketButton {
    constructor(onClick) {
      this.onClick = onClick;
    }
  
    getTemplate() {
      return `
        <button class="clear-basket-button">
          Очистить корзину
        </button>
      `;
    }
  
    getElement() {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = this.getTemplate();
      const button = wrapper.firstElementChild;
  
      button.addEventListener('click', this.onClick);
  
      return button;
    }
  }