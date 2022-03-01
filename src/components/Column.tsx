import { useContext } from "react";
import { AppStateContext } from "../context/appContext";
import { AddItemButton } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column: React.FC<ColumnProps> = ({ text, id }) => {
  const { getTasksById } = useContext(AppStateContext);

  const tasks = getTasksById(id);

  return (
    <div className="task-column">
      <h3 className="column-title">{text}</h3>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddItemButton
        onAdd={console.log}
        toggleButtonText="+ Add another card"
      />
    </div>
  );
};
