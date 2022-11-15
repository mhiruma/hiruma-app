import {Box,CSSObject} from "@mantine/core";
import { HeaderMenu } from "../parts/Header";
import React from "react";
import { TodoList} from "../parts/TodoList";
import { Props as TodoListItemProps } from "../parts/TodoListitem";

export type Props = {
    todoList: TodoListItemProps[];
};

export const TodoListTemplate: React.FC<Props> = ({todoList}) => {
    return(
        <Box sx={BoxStyle}>
            <HeaderMenu links={[]}/>
            <TodoList todoList={todoList}/> 
        </Box>
    );
};

const BoxStyle: CSSObject = {
    maxWidth: "1024px",
    margin: "0 auto",
}