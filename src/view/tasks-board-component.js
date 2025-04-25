import { createElement } from '../framework/render.js';

function createTasksBoardComponentTemplate() {
  return `<div class="task-board"></div>`;
}

export default class TaskBoardComponent {
  getTemplate() {
    return createTasksBoardComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}