import { useState } from "react";
import { NewItemForm } from "./NewItemForm";

type AddItemButtonProps = {
  onAdd: (text: string) => void;
  toggleButtonText: string;
};

export const AddItemButton: React.FC<AddItemButtonProps> = ({
  onAdd,
  toggleButtonText,
}) => {
  const [showInput, setShowInput] = useState(false);

  if (showInput) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowInput(false);
        }}
      />
    );
  }
  return (
    <button onClick={() => setShowInput(true)} className="add-item">
      {toggleButtonText}
    </button>
  );
};
