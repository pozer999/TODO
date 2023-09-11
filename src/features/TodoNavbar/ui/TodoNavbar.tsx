import { Button, Col, Form, Input, Row } from "antd";
import { useSelector } from "react-redux";
import { wrapperMessage } from "shared/helpers/messages/useMessage";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { getInputValue } from "../model/TodoNavbar";
import "./TodoNavbar.scss";
import { TodoSliceActions } from "store/Todo/TodoSlice";

const TodoNavbar = () => {
    const dispatch = useAppDispatch();

    const title = useSelector(getInputValue);

    const addItem = (title: string) => {
        if (title.length > 0) {
            let id = Date.now();
            let checked = false;
            dispatch(TodoSliceActions.addTask({ id, title, checked }));
            document.getElementsByTagName("input")[0].focus();
        } else {
            wrapperMessage("Пожалуйста, введите название задачи");
        }
    };
    const changeInputValue = (title: string) => {
        dispatch(TodoSliceActions.changeInputValue(title));
    };

    return (
        <>
            <div className="nav_text_container">
                <h1>Todo</h1>
            </div>
            <Row align="middle" justify="space-between">
                <Col className="nav_wrapper">
                    <Form className="nav_form">
                        <Input
                            size="large"
                            placeholder="Добавить задачу..."
                            value={title}
                            onChange={(e) => changeInputValue(e.target.value)}
                        />
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="large"
                            onClick={() => addItem(title)}
                            className="nav_btn"
                        >
                            Добавить
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default TodoNavbar;
