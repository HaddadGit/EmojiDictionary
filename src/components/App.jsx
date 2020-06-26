import React from "react";
import Emojipedia from "../emojipedia";
import Entery from "./Entery";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(Entery)}</dl>
    </div>
  );
}

export default App;
