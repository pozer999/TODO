import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getTodoItems } from "../model/TodoListSelectors";
import "./TodoList.scss";
import TodoItem from "enities/TodoItem/ui/TodoItem";
import { ITodoItem } from "store/InputPanel/InputPanelSlice";

const TodoList = () => {
    const todoItems = useSelector(getTodoItems);

    useEffect(() => {
        console.log(todoItems);
    }, [todoItems]);

    return (
        <TransitionGroup>
            {todoItems.map((item: ITodoItem) => (                
                <CSSTransition key={item.id} timeout={500} classNames="item">
                    <TodoItem itemProps={item} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TodoList;
