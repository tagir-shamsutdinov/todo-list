import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/task-model.js';

const pageBody = document.querySelector('.page-body');
const addTaskContainer = document.querySelector('.add-new-task-component');
const mainContent = document.querySelector('.main-content');

const tasksModel = new TasksModel(); // не передаем {task:...}, он сам загружает
const taskBoardPresenter = new TasksBoardPresenter({
  boardContainer: mainContent,
  tasksModel: tasksModel,
});

render(new HeaderComponent(), pageBody, RenderPosition.AFTERBEGIN);
render(new FormAddTaskComponent(), addTaskContainer, RenderPosition.BEFOREEND);
taskBoardPresenter.init();