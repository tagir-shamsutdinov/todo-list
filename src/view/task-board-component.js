import {AbstractComponent} from "../framework/view/abstract-component.js";

function createTaskBoardComponentTemplate() {
    return (
        `<section class="desk-tasks">
        </section>`
    );
}

export default class TaskBoardComponent extends AbstractComponent{
    get template() {
        return createTaskBoardComponentTemplate();
    }
}
