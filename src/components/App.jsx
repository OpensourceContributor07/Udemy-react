import React, { useState } from "react";
import Listitem from "./listItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function deleteitem(id) {
    setItems((prevValu) => {
      return prevValu.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Listitem
              key={index}
              id={index}
              todoItem={todoItem}
              onChecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
