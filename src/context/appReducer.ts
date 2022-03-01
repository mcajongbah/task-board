import { nanoid } from "nanoid";
import { Action } from "./actions";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appReducer = (state: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case "ADD_LIST": {
            state.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: [],
            })
            break;
        }
        case "ADD_TASK": {
            const { listId, text } = action.payload;
            const list = state.lists.find(list => list.id === listId);
            if (list) {
                list.tasks.push({
                    id: nanoid(),
                    text,
                });
            }
            break;
        }
    }
}