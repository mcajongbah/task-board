import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  text: string;
};

type List = {
    id: string;
    text: string;
    tasks: Task[];
}

export type AppState = {
    lists: List[];
}

const initialState: AppState = {
    lists: [
        {
            id: uuidv4(),
            text: "To Do",
            tasks: [
                {
                    id: uuidv4(),
                    text: "Generate app scaffold",
                },
                {
                    id: uuidv4(),
                    text: "Learn TypeScript",
                },
                {
                    id: uuidv4(),
                    text: "Begin to use static typing",
                },
            ],
        },
        {
            id: uuidv4(),
            text: "In Progress",
            tasks: [
                {
                    id: uuidv4(),
                    text: "Generate app scaffold",
                },
                {
                    id: uuidv4(),
                    text: "Begin to use static typing",
                },
            ],
        },

        {
            id: uuidv4(),
            text: "Done",
            tasks: [
                {
                    id: uuidv4(),
                    text: "Begin to use static typing",
                },
            ],
        },
    ],
}

type AppStateContextProps = {
    lists: List[];
    getTasksById(id: string): Task[]
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