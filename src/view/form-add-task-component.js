import { AbstractComponent } from "../framework/view/abstract-component.js";

export default class FormAddTaskComponent extends AbstractComponent {
  get template() {
    return `
      <form class="task-form">
        <input type="text" name="title" placeholder="Заголовок" required>
        <textarea name="description" placeholder="Описание"></textarea>
        <button type="submit">Добавить</button>
      </form>
    `;
  }
}