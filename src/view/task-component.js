import { AbstractComponent } from "../framework/view/abstract-component.js";

const generateTaskMarkup = (text, taskClass) => `
  <li class="task-${taskClass}">${text}</li>
`;

export default class TaskComponent extends AbstractComponent {
  constructor(task) {
    super();
    this.task = task;
    this.#initializeTask();
  }

  get template() {
    return generateTaskMarkup(this.task.title, this.task.status);
  }

  #initializeTask() {
    this.#enableTaskDragging();
  }

  #enableTaskDragging() {
    this.element.setAttribute("draggable", true);
    this.element.addEventListener("dragstart", (event) => {
      this.element.classList.add("dragging");
      event.dataTransfer.setData("text/plain", this.task.id);
    });

    this.element.addEventListener("dragend", () => {
      this.element.classList.remove("dragging");
    });
  }
}