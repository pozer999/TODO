import { Space } from "antd";
import TodoItem from "enities/TodoItem/ui/TodoItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTodoItems } from "../model/TodoListSelectors";
import "./TodoList.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodoList = () => {
    const todoItems = useSelector(getTodoItems);

    useEffect(() => {
        console.log(todoItems);
    }, [todoItems]);

    return (
        <TransitionGroup>
            {todoItems.map((item) => (
                <CSSTransition key={item.id} timeout={500} classNames="item">
                    <TodoItem item={item} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TodoList;
