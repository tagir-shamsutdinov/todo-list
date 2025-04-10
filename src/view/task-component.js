import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class TaskComponent extends AbstractComponent {
  #task;

  constructor({ task }) {
    super();
    this.#task = task;
  }

  get template() {
    return `
      <article class="task-card">
        <h3 class="task-card__title">${this.#task.title}</h3>
        <p class="task-card__description">${this.#task.description}</p>
      </article>
    `;
  }
}