import { createElement } from '../framework/render.js';

function createFormAddTaskComponentTemplate() {
  return `
    <form class="add-task">
      <input type="text" name="task" placeholder="Новая задача..." required>
      <button type="submit">+ Добавить</button>
    </form>
  `;
}

export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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