import { CloseOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Row, Space } from "antd";
import { useCallback } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { TodoSliceActions } from "store/Todo/TodoSlice";
import "./TodoItem.scss";

const TodoItem = ({ taskProps }: any) => {
    const dispath = useAppDispatch();
    const handleRemoveTask = useCallback(
        (id: number) => {
            dispath(TodoSliceActions.removeTask(id));
        },
        [dispath]
    );
    const handleCheckedTask = useCallback(
        (id: number) => {
            dispath(TodoSliceActions.checkedTask(id));
        },
        [dispath]
    );

    return (
        <div className="wrapper_todoItem">
            <Alert
                type={taskProps.checked ? "error" : "info"}
                message={
                    <Row justify="space-between">
                        <Space>
                            <Checkbox
                                checked={taskProps.checked}
                                onClick={() => handleCheckedTask(taskProps.id)}
                            />
                            <div
                                style={{
                                    textDecoration: taskProps.checked
                                        ? "line-through"
                                        : "none",
                                    fontSize: 16,
                                }}
                            >
                                {taskProps.title}
                            </div>
                        </Space>
                        <Button
                            type="text"
                            onClick={() => handleRemoveTask(taskProps.id)}
                        >
                            <CloseOutlined />
                        </Button>
                    </Row>
                }
            />
        </div>
    );
};

export default TodoItem;
