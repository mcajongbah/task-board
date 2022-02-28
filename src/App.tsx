import { AddItemButton } from "./components/AddNewItem";
import { Column } from "./components/Column";

function App() {
  return (
    <div className="w-full h-screen bg-[#3179ba] items-start flex p-5">
      <Column text="ToDo: " />
      <AddItemButton
        onAdd={console.log}
        toggleButtonText="+ Add another list"
      />
    </div>
  );
}

export default App;
