import React from "react";
import { INITIAL_TODO_LIST_DATA } from "../../data/initialTodoListData";
import { TodoListTemplate } from "../templates/TodoListTemplate";

export const TodoListPage: React.FC = () => {
    return<TodoListTemplate todoList={INITIAL_TODO_LIST_DATA}/>;
};
