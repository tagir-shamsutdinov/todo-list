import { createElement } from '../framework/render.js';

function createTasksListComponentTemplate(status) {
  return `<div class="column ${status}"><h3>${status}</h3></div>`;
}

export default class TasksListComponent {
  constructor(status) {
    this.status = status;
  }

  getTemplate() {
    return createTasksListComponentTemplate(this.status);
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