import { CloseOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Row, Space } from "antd";
import { AppDispatch } from "app/store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ITodoItem, InputPanelActions } from "store/InputPanel/InputPanelSlice";

const TodoItem = ({itemProps}: any) => {
    const dispath = useDispatch<AppDispatch>();
    const handleDeletedItem = useCallback(
        (item: number) => {
            dispath(InputPanelActions.removeTask(item));
        },
        [dispath]
    );
    const handleCheckedItem = useCallback(
        (item: number) => {
            dispath(InputPanelActions.checkedTask(item));
        },
        [dispath]
    );

    return (
        <div style={{ marginTop: 10 }}>
            <Alert
                type={itemProps.checked ? "error" : "info"}
                message={
                    <Row justify="space-between">
                        <Space>
                            <Checkbox
                                checked={itemProps.checked}
                                onClick={() => handleCheckedItem(itemProps.id)}
                            />
                            <div
                                style={{
                                    textDecoration: itemProps.checked
                                        ? "line-through"
                                        : "none",
                                    fontSize: 20,
                                }}
                            >
                                {itemProps.title}
                            </div>
                        </Space>
                        <Button
                            type="text"
                            onClick={() => handleDeletedItem(itemProps.id)}
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
