import { tasks } from '../mock/task.js';

export default class TasksModel {
    constructor ({task}) {
        this.task = task;
    }

    getTasks() {
        return createTaskComponentTemplate(this.task);
    }
}