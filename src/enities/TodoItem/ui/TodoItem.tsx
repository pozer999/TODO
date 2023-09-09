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
    const handleCheckedItem = useCallback((item: number) => {
        dispath(InputPanelActions.checkedItem(item));
    }, [dispath]);
    return (
        <div style={{marginTop: 10}}>
            <Alert
                type = {item.checked ? "error" : "info"}  
                message={
                    <Row justify="space-between">
                        <Space>
                            <Checkbox
                                checked={item.checked}
                                onClick={() => handleCheckedItem(item.id)}
                            />
                            <div style={{textDecoration: item.checked ? "line-through" : "none", fontSize: 20}}>{item.title}</div>
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
