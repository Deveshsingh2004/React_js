import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function Createmoji(Create) {
  return (
    <Emoji emoji={Create.emoji} name={Create.name} meaning={Create.meaning} />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Createmoji)}</dl>
    </div>
  );
}

export default App;
