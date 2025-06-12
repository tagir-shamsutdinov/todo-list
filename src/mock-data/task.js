import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "Выучить JS"
            },
            {
                id: generateID(),
                name: "Выучить React"
            },
            {
                id: generateID(),
                name: "Изучить MVP "
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: [
            {
                id: generateID(),
                name: "Сделать домашку"
            },
            {
                id: generateID(),
                name: "Выпить смузи"
            }
        ]
    },
    {
        status: Status.DONE,
        tasks: [
            {
                id: generateID(),
                name: "Позвонить маме"
            },
            {
                id: generateID(),
                name: "Погладить кота"
            }
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "Сходить погулять"
            },
            {
                id: generateID(),
                name: "Прочитать войну и мир"
            }
        ]
    }
]