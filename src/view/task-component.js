import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(task) {
  const { title, status } = task;
  
  return `
    <div class="taskboard__item task task--${status}">
      <div class="task__body">
        <p class="task--view">${title}</p>
        <input type="text" class="task--input" />
      </div>
      <button aria-label="Изменить" class="task__edit" type="button"></button>
    </div>
  `;
}

export default class TaskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
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