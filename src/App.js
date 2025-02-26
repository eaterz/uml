import React from "react";
import "./index.css";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";
import Info4 from "./components/Info4";
import Info5 from "./components/Info5";
import Info6 from "./components/Info6";
import Info7 from "./components/Info7";

function App() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <div className="container mx-auto">
                <Info1 />
                <Info2 />
                <Info3 />
                <Info7 />
                <Info5 />
                <Info4 />
                <Info6 />
            </div>
        </main>
    );
}

export default App;