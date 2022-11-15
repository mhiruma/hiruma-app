import React from 'react';
import { Props as TodoListItemProps, TodoListitem } from "./TodoListitem";
export type Props = {
    todoList: TodoListItemProps[];
};

export const TodoList: React.FC<Props> = ({ todoList }) =>{
    return(
        <>
        {todoList.map((item) => (
        <TodoListitem title={item.title}/>
        ))};
        </>
    )
};