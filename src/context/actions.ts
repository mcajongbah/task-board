interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: {
    listId: string;
    text: string;
  };
}

export type Action = AddListAction | AddTaskAction;

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const addTask = (listId: string, text: string): Action => ({
  type: "ADD_TASK",
  payload: {
    listId,
    text,
  },
});
