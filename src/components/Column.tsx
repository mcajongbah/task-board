import { useContext } from "react";
import { addTask } from "../context/actions";
import { AppStateContext } from "../context/appContext";
import { AddItemButton } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column: React.FC<ColumnProps> = ({ text, id }) => {
  const { getTasksById, dispatch } = useContext(AppStateContext);

  const tasks = getTasksById(id);

  return (
    <div className="task-column">
      <h3 className="column-title">{text}</h3>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddItemButton
        onAdd={text => dispatch(addTask(id, text))}
        toggleButtonText="+ Add another card"
      />
    </div>
  );
};
