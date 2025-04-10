import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class TaskBoardComponent extends AbstractComponent {
  get template() {
    return `<section class="board container"></section>`;
  }
}