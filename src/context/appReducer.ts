import { nanoid } from "nanoid";
import { Action } from "./actions";
import { initialState } from "./appContext";

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

export const appReducer = (
  state: AppState,
  action: Action
): typeof initialState | void => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: nanoid(),
            text: action.payload,
            tasks: [],
          },
        ],
      };
    case "ADD_TASK":
      const { listId, text } = action.payload;
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === listId
            ? {
                ...list,
                tasks: [...list.tasks, { id: nanoid(), text }],
              }
            : list
        ),
      };
    default: {
      return state;
    }
  }
};
