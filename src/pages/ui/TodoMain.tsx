import { Col, Row, Space } from "antd";
import TodoNavbar from "features/TodoNavbar/ui/TodoNavbar";
import TodoList from "widgets/TodoList/ui/TodoList";
import cls from "./TodoMain.module.scss";
const TodoMain = () => {
    return (
        <Row
            justify="center"
            align="middle"
            className={cls.wrapperMain}
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
            }}
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
