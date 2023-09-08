import { Button, Space, Table, TableProps } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import { ColumnsType, SorterResult } from "antd/es/table/interface";
import { useState } from "react";
import TodoList from "widgets/TodoList/ui/TodoList";

const TodoMain = () => {
    
    return (
        <div>
            
            <TodoList />
        </div>
    );
};
export default TodoMain;
