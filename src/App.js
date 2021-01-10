import "./App.scss";
import Navigationbar from "./Navigationbar.js";
import Headline from "./Headline.js";
import { Container } from "react-bulma-components";

function App() {
    return (
        <div className="App">
            <Navigationbar />
            <Headline />
        </div>
    );
}

export default App;
