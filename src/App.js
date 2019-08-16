import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row" />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
