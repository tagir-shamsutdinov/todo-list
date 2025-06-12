import {AbstractComponent} from "../framework/view/abstract-component.js";

function createPlugComponent() {
    return (
        `
        <div class=stub>
            Перетащите карточку
        </div>
        `
    );
}

export default class PlugComponent extends AbstractComponent {
    get template() {
        return createPlugComponent();
    }
}