import "animate.css/animate.min.css";
import { ConfigProvider, theme } from "antd";
import TodoMain from "pages/ui/TodoMain";
import "./style/index.scss";

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className="App">
                <TodoMain />
            </div>
            <div className="scroll-bg" />
        </ConfigProvider>
    );
}

export default App;
