import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/tasks-board-component.js';
import { render } from '../framework/render.js';

export default class TasksBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = new TaskBoardComponent();
  #boardTasks = [];

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
  }

  init() {
    this.#boardTasks = [...this.#tasksModel.getTasks()];
    render(this.#tasksBoardComponent, this.#boardContainer);

    const statuses = ['backlog', 'processing', 'done', 'basket'];
    
    statuses.forEach((status) => {
      const tasksListComponent = new TasksListComponent(status);
      render(tasksListComponent, this.#tasksBoardComponent.getElement());

      this.#boardTasks
        .filter(task => task.status === status)
        .forEach(task => {
          const taskComponent = new TaskComponent({ task });
          render(taskComponent, tasksListComponent.getElement());
        });
    });
  }
}