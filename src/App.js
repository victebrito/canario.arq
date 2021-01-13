import "./App.scss";
import Navigationbar from "./Navigationbar.js";
import Headline from "./Headline.js";
import { Container, Section } from "react-bulma-components";
import Topics from "./Topics.js";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Navigationbar />
            <Headline />
            <Container>
                <Section size="medium">
                    <Topics />
                </Section>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
