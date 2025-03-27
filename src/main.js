import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoardComponent from './view/task-board-component.js';
import TaskListComponent from './view/task-list-component.js';
import TaskComponent from './view/task-component.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const mainContainer = document.querySelector('.board-app__main');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
const taskBoard = new TaskBoardComponent();
render(taskBoard, mainContainer);

for (let i = 0; i < 4; i++) {
  const taskList = new TaskListComponent();
  render(taskList, taskBoard.getElement());

  for (let j = 0; j < 4; j++) {
    render(new TaskComponent(), taskList.getElement());
  }
}