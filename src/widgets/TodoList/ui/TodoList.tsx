import { Space } from "antd";
import TodoItem from "enities/TodoItem/ui/TodoItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodoItems } from "../model/TodoListSelectors";

const TodoList = () => {
    const todoItems = useSelector(getTodoItems);

    useEffect(() => {
        console.log(todoItems);
    }, [todoItems]);

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            {todoItems.map((item, index) => (
                <TodoItem item={item} key={index} />
            ))}
        </Space>
    );
};

export default TodoList;
