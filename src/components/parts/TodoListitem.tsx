import React from "react";
import { Center ,Text ,CSSObject } from "@mantine/core";

export type Props = {
    title: string;
};

export const TodoListitem: React.FC<Props> = ({title}) => {
    return(
        <Center sx={centerStyle}>
            <Text sx={textStyle}>{title}</Text>
        </Center>
    );
};

const centerStyle: CSSObject = {
    height: "60px",
    borderBottom: "1px solid rgba(100, 100, 100, .3)",
};

const textStyle: CSSObject = {
    fontSize: "14px",
};