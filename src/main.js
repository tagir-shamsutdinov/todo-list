import { render, RenderPosition } from './framework/render.js'
import HeaderComponent from './view/header-component.js'
import AddNewTaskComponent from './view/add-task-component.js'
import TasksBoardPresenter from './presenter/task-board-presenter.js'
import TasksModel from './model/task-model.js'
import ClearButtonComponent from './view/clear-button-component.js'
import TaskApiService from './task-api-service.js'

const END_POINT = 'https://684b1b04165d05c5d35b8952.mockapi.io';
const bodyContainer = document.querySelector('.page-body');
const addTaskContainer = document.querySelector('.add-new-task-component');
const deskContainer = document.querySelector('.main-content');

const tasks = new TasksModel({
    tasksApiServices: new TaskApiService(END_POINT)
});

const clearButtonComponent = new ClearButtonComponent({
    onClick: handleClearBasketButtonClick
});

const taskBoardPresenter = new TasksBoardPresenter({
    boardContainer: deskContainer,
    tasksModel: tasks,
    clearButtonComponent: clearButtonComponent
});

const formAddTaskComponent = new AddNewTaskComponent({
    onClick: handleAddNewTaskButtonClick
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(formAddTaskComponent, addTaskContainer);

taskBoardPresenter.init();

function handleAddNewTaskButtonClick() {
    taskBoardPresenter.createTask();
}

function handleClearBasketButtonClick() {
    taskBoardPresenter.clearBasket();
}