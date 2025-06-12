import {createElement} from "../framework/render.js";
import {AbstractComponent} from "../framework/view/abstract-component.js";

function createTaskComponentTemplate(id, task) {
    return (
        `<li id="${id}">${task}</li>`
    );
}

export default class TaskComponent extends AbstractComponent {
    constructor(task) {
        super();
        this.task = task;
        this.#afterCreateElement();
    }

    get template() {
        return createTaskComponentTemplate(this.task.id, this.task.name);
    }

    #afterCreateElement() {
        this.#makeTaskDraggable();
    }

    #makeTaskDraggable() {
        this.element.setAttribute('draggable', true);
      
        this.element.addEventListener('dragstart', (evt) => {
          evt.dataTransfer.setData('text/plain', this.task.id);
          this.element.classList.add('dragging');
        });
      
        this.element.addEventListener('dragend', () => {
          this.element.classList.remove('dragging');
        });
      }
}
