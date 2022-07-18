import React, { useState } from "react";

function Listitem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* //onClick={props.onChecked(props.id)} very bad idea it's just calling rather than passing the value */}
      <li>{props.todoItem}</li>
    </div>
  );
}

export default Listitem;
