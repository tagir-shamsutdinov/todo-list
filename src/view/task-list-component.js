import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class TasksListComponent extends AbstractComponent {
  #status = null;
  #label = '';

  constructor({ status, label }) {
    super();
    this.#status = status;
    this.#label = label;
  }

  get template() {
    return `
      <section class="task-list task-list--${this.#status}">
        <h2 class="task-list__title">${this.#label}</h2>
      </section>
    `;
  }
}