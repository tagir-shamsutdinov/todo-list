import { AbstractComponent } from "../framework/view/abstract-component.js";

const renderTaskBoardMarkup = () => `
  <section class="section-tasks"></section>
`;

export default class TaskBoardComponent extends AbstractComponent {
  get template() {
    return renderTaskBoardMarkup();
  }
}