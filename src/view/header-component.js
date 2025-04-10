import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class HeaderComponent extends AbstractComponent {
  get template() {
    return `<header class="header"><h1 class="header__title">Список задач</h1></header>`;
  }
}