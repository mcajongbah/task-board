import { createContext, Dispatch, useReducer } from "react";
import { nanoid } from "nanoid";
import { AppState, List, Task, appReducer } from "./appReducer";
import { Action } from "./actions";

export const initialState: AppState = {
  lists: [
    {
      id: nanoid(),
      text: "To Do",
      tasks: [
        {
          id: nanoid(),
          text: "Validate Input",
        },
        {
          id: nanoid(),
          text: "Learn TypeScript",
        },
        {
          id: nanoid(),
          text: "Define Min and Max width of cards and scroll horizontally", 
        },
        {
          id: nanoid(),
          text: "Style Scrollbar", 
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

export const AppStateContext = createContext<AppStateContextProps>({
    lists: initialState.lists,
    getTasksById: () => [],
    dispatch: () => {},
});

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

    const { lists } = state;

    const getTasksById = (id: string) => {
        return lists.filter((list: { id: string; }) => list.id === id)[0]?.tasks || [];
    }

    const value = {lists, getTasksById, dispatch};

    return (
        <AppStateContext.Provider value={value as AppStateContextProps}>
            {children}
        </AppStateContext.Provider>
    );
}