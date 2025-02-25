import React from "react";
import "./index.css";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";
import Info4 from "./components/Info4";

function App() {
    return (
        <main className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
            <Info1 />
            <Info2 />
            <Info3 />
            <Info4 />
        </main>
    );
}

export default App;
