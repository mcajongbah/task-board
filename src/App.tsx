import { useContext } from "react";
import { AddItemButton } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppStateContext } from "./context/AppContext";

function App() {

  const { lists } = useContext(AppStateContext);

  return (
    <div className="w-full h-screen bg-[#3179ba] items-start flex p-5">
      {lists.map(list => (
        <Column key={list.id} text={list.text} id={list.id} />
      ))}
      <AddItemButton
        onAdd={console.log}
        toggleButtonText="+ Add another list"
      />
    </div>
  );
}

export default App;
