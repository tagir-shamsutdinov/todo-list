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
    this.#boardTasks = [...this.#tasksModel.tasks];
    this.#renderBoard();
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent({ task });
    render(taskComponent, container);
  }

  #renderTasksList(status) {
    const tasksListComponent = new TasksListComponent({
      status,
      label: StatusLabel[status]
    });

    render(tasksListComponent, this.#tasksBoardComponent.element);

    const tasksForStatus = getTasksByStatus(this.#boardTasks, status);

    if (tasksForStatus.length === 0) {
      this.#renderEmpty(tasksListComponent.element);
    } else {
      tasksForStatus.forEach(task => this.#renderTask(task, tasksListComponent.element));
      this.#renderClearButton(tasksListComponent.element);
    }
  }

  #renderEmpty(container) {
    const emptyComponent = new EmptyComponent();
    render(emptyComponent, container);
  }

  #renderClearButton(container) {
    const clearButton = new ClearButtonComponent();
    render(clearButton, container);
  }

  #renderBoard() {
    render(this.#tasksBoardComponent, this.#boardContainer);
    Object.values(Status).forEach((status) => this.#renderTasksList(status));
  }
}