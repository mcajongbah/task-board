import { useState } from "react";
import { useFocus } from "../utils/useFocus";

type NewItemFormProps = {
    onAdd: (text: string) => void;
}

export const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onAdd(text);
            setText('');
        }
    }

        return (
          <div className="max-w-[300px] flex flex-col w-full items-start">
            <input
              className="w-full rounded border-none shadow-[#091e4240_0px_1px_0px_0px] mb-2 py-2 px-4"
              type="text"
              name="text"
              ref={inputRef}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Enter a new item"
              onKeyPress={handleSubmit}
            />
            <button onClick={() => onAdd(text)} className="bg-[#5aac44] rounded border-none text-white py-2 px-3 text-center">
              Create
            </button>
          </div>
        );
}