import Search, { SearchProps } from "antd/es/input/Search";
import { AppDispatch } from "app/store";
import { InputPanelActions } from "features/InputPanel/InputPanelSlice";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";

const TodoNavbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onSearch: SearchProps["onSearch"] = (title, _e, info) => {
        let id = nanoid();
        dispatch(InputPanelActions.changeInputValue({ id, title }));
        console.log(info?.source, title);
    };

    return (
        <>
            <Search
                placeholder="Добавить задачу..."
                onSearch={onSearch}
                enterButton
            />
        </>
    );
};

export default TodoNavbar;
