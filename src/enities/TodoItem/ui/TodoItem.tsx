import { CloseOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Row, Space } from "antd";
import { AppDispatch } from "app/store";
import { InputPanelActions } from "features/InputPanel/InputPanelSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
interface ITodoItem {
    item: any;
}

const TodoItem = ({ item }: ITodoItem) => {
    const dispath = useDispatch<AppDispatch>();
    const handleDeletedItem = useCallback(
        (item: any) => {
            dispath(InputPanelActions.deletedItem(item));
            console.log("item", item);
        },
        [dispath]
    );
    return (
        <div>
            <Alert
                type="info"
                message={
                    <Row justify="space-between">
                        <Space>
                            <Checkbox />
                            {item.title}
                        </Space>
                        <Button
                            type="text"
                            onClick={() => handleDeletedItem(item.id)}
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
