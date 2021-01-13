import "./App.scss";
import Navigationbar from "./Navigationbar.js";
import Headline from "./Headline.js";
import { Container } from "react-bulma-components";
import Topics from "./Topics.js";

function App() {
    return (
        <div className="App">
            <Navigationbar />
            <Headline />
            <Container>
                <Topics />
            </Container>
        </div>
    );
}

export default App;
