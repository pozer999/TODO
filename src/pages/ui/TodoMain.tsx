import { Col, Row, Space } from "antd";
import TodoNavbar from "features/TodoNavbar/ui/TodoNavbar";
import TodoList from "widgets/TodoList/ui/TodoList";
import cls from "./TodoMain.module.scss";
const TodoMain = () => {
    return (
        <Row
            justify="center"
            className={cls.wrapperMain}
        >
            <Col span={12}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <TodoNavbar />
                    <TodoList />
                </Space>
            </Col>
        </Row>
    );
};
export default TodoMain;
