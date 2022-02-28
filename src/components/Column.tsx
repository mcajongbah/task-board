import { AddItemButton } from "./AddNewItem";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
};

export const Column: React.FC<ColumnProps> = ({ text }) => {
  return (
    <div className="task-column">
      <h3 className="column-title">{text}</h3>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
      <AddItemButton
        onAdd={console.log}
        toggleButtonText="+ Add another card"
      />
    </div>
  );
};
