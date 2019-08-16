import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>hello from todo-list</h1>
        <TodoItem />
      </div>
    );
  }
}
