import Search, { SearchProps } from "antd/es/input/Search";
import { AppDispatch } from "app/store";
import { InputPanelActions } from "features/InputPanel/InputPanelSlice";
import { nanoid } from "nanoid";
import './TodoNavbar.scss';
import { useDispatch } from "react-redux";
import { wrapperMessage } from "shared/helpers/messages/useMessage";

const TodoNavbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onSearch: SearchProps["onSearch"] = (title, _e, info) => {
        if (title.length > 0) {
            let id = nanoid();
            dispatch(InputPanelActions.changeInputValue({ id, title }));
            console.log(info?.source, title);
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
            size="large"
                placeholder="Добавить задачу..."
                onSearch={onSearch}
                enterButton
            />
        </>
    );
};

export default TodoNavbar;
