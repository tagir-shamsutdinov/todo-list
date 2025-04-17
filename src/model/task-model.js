import { tasks } from "../mock/task.js";
import { generateID } from "../utils.js";

export default class TaskModel {
  #boardtasks = tasks;
  #observers = [];

  get tasks() {
    return this.#boardtasks;
  }

  getTaskByStatus(status) {
    return this.#boardtasks.filter((task) => task.status === status);
  }

  addTask(title) {
    const newTask = {
      id: generateID(),
      title: title,
      status: "backlog",
    };
    this.#boardtasks.push(newTask);
    this._notifyObservers();
    return newTask;
  }

  removeTrash() {
    this.#boardtasks = this.#boardtasks.filter(
      (task) => task.status !== "trash"
    );
    this._notifyObservers();
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter((obs) => obs !== observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }
}
