import { Button } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import { AppDispatch } from "app/store";
import { InputPanelActions } from "features/InputPanel/InputPanelSlice";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { wrapperMessage } from "shared/helpers/messages/useMessage";
import "./TodoNavbar.scss";

const TodoNavbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onSearch: SearchProps["onSearch"] = (title) => {
        if (title.length > 0) {
            let id = nanoid();
            let checked = false;
            dispatch(
                InputPanelActions.changeInputValue({ id, title, checked })
            );
        } else {
            wrapperMessage("Пожалуйста, введите название задачи");
        }
    };

    return (
        <>
            <div className="text-container">
                <h1>Todo</h1>
            </div>
            <Search
            style={{border: "2px solid black", borderRadius: "10px"}}
                size="large"
                placeholder="Добавить задачу..."
                onSearch={onSearch}
                enterButton={
                    <Button type="primary">
                        Добавить
                    </Button>
                }
            />
        </>
    );
};

export default TodoNavbar;
