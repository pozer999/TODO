import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.scss";
import TodoItem from "enities/TodoItem/ui/TodoItem";
import { getTodoTasks } from "../model/TodoListSelectors";
import { ITodoTask } from "store/InputPanel/InputPanelSlice";

const TodoList = () => {
    const todoTasks = useSelector(getTodoTasks);

    useEffect(() => {
        console.log(todoTasks);
    }, [todoTasks]);

    return (
        <TransitionGroup>
            {todoTasks.map((task: ITodoTask) => (                
                <CSSTransition key={task.id} timeout={500} classNames="item">
                    <TodoItem taskProps={task} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TodoList;
