import "./App.css";
import table from "./lookup";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const element = document.querySelector(
                ".container"
            ) as HTMLDivElement;
            element.classList.add("active");
        }, 10);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            <center>
                <h1>All Shortcuts</h1>
            </center>

            <div className="lookup-list">
                {Object.entries(table).map(([key, array]) => (
                    <div key={key} className="lookup-item">
                        <span className="lookup-key">{key.toUpperCase()}:</span>
                        <a
                            href={array[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lookup-link"
                        >
                            {array[2]}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
