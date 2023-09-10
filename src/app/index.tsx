import "animate.css/animate.min.css";
import { ConfigProvider, Watermark, theme } from "antd";
import TodoMain from "pages/ui/TodoMain";
import { useEffect } from "react";
import "./style/index.scss";

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
            }}
        >
            <div className="App" style={{zIndex: 2, position: "relative"}}>
                <TodoMain />
            </div>
            <div className="scroll-bg"></div>
        </ConfigProvider>
    );
}

export default App;
