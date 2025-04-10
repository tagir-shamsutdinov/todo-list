import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class ClearButtonComponent extends AbstractComponent {
  get template() {
    return `<button class="button button--clear">Очистить</button>`;
  }
}