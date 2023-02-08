import { style } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";

import ReplayIcon from "@mui/icons-material/Replay";
import Note from "./Note";
function App() {
  const {
    dark,
    setDark,
    text,
    changed,
    res,
    add,
    note,
    search,
    seaTx,
    newarr,
    addRef,
  } = useContext(Context);
  const counter = 200 - text.length;

  return (
    <div className={`holder ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="header mb-4">
          <h1>Notes</h1>
          <button onClick={() => setDark((prev) => !prev)}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <div className="search mb-5">
          <input
            type="text"
            placeholder="Search for a note..."
            className="form-control"
            onChange={(e) => search(e)}
            value={seaTx}
          />
        </div>
        <div className="notes-holder">
          {newarr.length > 0
            ? newarr.map((ele) => {
                return (
                  <Note
                    key={ele.id}
                    id={ele.id}
                    text={ele.text}
                    date={ele.date}
                  />
                );
              })
            : note.length > 0
            ? note.map((ele) => {
                return (
                  <Note
                    key={ele.id}
                    id={ele.id}
                    text={ele.text}
                    date={ele.date}
                  />
                );
              })
            : ""}
          <div className="adder">
            <textarea
              placeholder="type to add a note..."
              value={text}
              onChange={(e) => changed(e)}
              maxLength="200"
              ref={addRef}
            />
            <div className="clear" onClick={res}>
              <ReplayIcon />
            </div>
            <div className="footer">
              <p className="ltter-count">{counter} Remaining</p>
              <button onClick={add}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
