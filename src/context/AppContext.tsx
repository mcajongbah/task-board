import { createContext, Dispatch } from "react";
import { nanoid } from "nanoid";
import { AppState, List, Task, appReducer } from "./appReducer";
import { Action } from "./actions";

const initialState: AppState = {
  lists: [
    {
      id: nanoid(),
      text: "To Do",
      tasks: [
        {
          id: nanoid(),
          text: "Generate app scaffold",
        },
        {
          id: nanoid(),
          text: "Learn TypeScript",
        },
        {
          id: nanoid(),
          text: "Begin to use static typing",
        },
      ],
    },
    {
      id: nanoid(),
      text: "In Progress",
      tasks: [
        {
          id: nanoid(),
          text: "Generate app scaffold",
        },
        {
          id: nanoid(),
          text: "Begin to use static typing",
        },
      ],
    },

    {
      id: nanoid(),
      text: "Done",
      tasks: [
        {
          id: nanoid(),
          text: "Begin to use static typing",
        },
        {
          id: nanoid(),
          text: "Figure react context",
        },
      ],
    },
  ],
};

type AppStateContextProps = {
    lists: List[];
    getTasksById(id: string): Task[]
    dispatch: Dispatch<Action>
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: React.FC = ({ children }) => {
    const { lists } = initialState;

    const getTasksById = (id: string) => {
        return lists.filter(list => list.id === id)[0]?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksById }}>
            {children}
        </AppStateContext.Provider>
    );
}