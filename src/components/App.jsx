import React from "react";
import Emojipedia from "../emojipedia";
import Entery from "./Entery";

function currentItem(props) {
  return (
    <Entery
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(currentItem)}</dl>
    </div>
  );
}

export default App;
