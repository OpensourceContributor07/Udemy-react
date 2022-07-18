import React, { useState } from "react";

function Listitem(props) {
  const [click, setclick] = useState(false);
  return (
    <div
      onClick={() => {
        setclick((prev) => {
          return !prev;
        });
      }}
    >
      <li style={{ textDecoration: click ? "line-through" : "none" }}>
        {props.todoItem}
      </li>
    </div>
  );
}

export default Listitem;
