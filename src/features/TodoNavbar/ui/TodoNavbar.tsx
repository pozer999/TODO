import { Button, Col, Form, Input, Row } from "antd";
import { AppDispatch } from "app/store";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { wrapperMessage } from "shared/helpers/messages/useMessage";
import { InputPanelActions } from "store/InputPanel/InputPanelSlice";
import { getInputValue } from "../model/TodoNavbar";
import "./TodoNavbar.scss";

const TodoNavbar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const title = useSelector(getInputValue);

    const addItem = (title: string) => {
        if (title.length > 0) {
            let id = Date.now();
            let checked = false;
            dispatch(InputPanelActions.addTask({ id, title, checked }));
            document.getElementsByTagName("input")[0].focus();
        } else {
            wrapperMessage("Пожалуйста, введите название задачи");
        }
    };
    const changeInputValue = (title: string) => {
        dispatch(InputPanelActions.changeInputValue(title));
    };

    return (
        <>
            <div className="text-container">
                <h1>Todo</h1>
            </div>
            <Row align="middle" justify="space-between">
                <Col style={{ width: "100%" }}>
                    <Form style={{ display: "flex" }}>
                        <Input
                            id="inp"
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
                            style={{ marginLeft: 4 }}
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
