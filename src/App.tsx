import { useContext } from "react";
import { AddItemButton } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { addList } from "./context/actions";
import { AppStateContext } from "./context/appContext";

function App() {

  const { lists, dispatch } = useContext(AppStateContext);

  return (
    <div className="w-full h-screen bg-[#3179ba] items-start flex p-5">
      {lists && lists.map(list => (
        <Column key={list.id} text={list.text} id={list.id} />
      ))}
      <AddItemButton
        onAdd={text => dispatch(addList(text))}
        toggleButtonText="+ Add another list"
      />
    </div>
  );
}

export default App;
