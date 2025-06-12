import HeaderComponent from './view/header-component.js';
import {render, RenderPosition} from './framework/render.js';
import FormAddTaskComponent from "./view/add-task-component.js";
import TasksModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/task-board-presenter.js';
import ClearButtonComponent from "./view/clear-button-component.js";

const bodyContainer= document.querySelector('.page-body');
const formContainer = document.querySelector('.add-new-task-component');
const taskBoardContainer = document.querySelector('.main-content');

const tasks = new TasksModel();

const clearButtonComponent = new ClearButtonComponent({
    onClick: handleClearBasketButtonClick
});

const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: taskBoardContainer,
    tasksModel: tasks,
    clearButtonComponent: clearButtonComponent
})

const formAddTaskComponent = new FormAddTaskComponent({
    onClick: handleAddNewTaskButtonClick
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(formAddTaskComponent, formContainer);

tasksBoardPresenter.init();

function handleAddNewTaskButtonClick() {
    tasksBoardPresenter.createTask();
}

function handleClearBasketButtonClick() {
    tasksBoardPresenter.clearBasket();
}