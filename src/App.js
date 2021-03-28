import "./App.scss";
import Navigationbar from "./Navigationbar.js";
import Headline from "./Headline.js";
import { Container, Section } from "react-bulma-components";
import Topics from "./Topics.js";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navigationbar />
            <Router>
                <Switch>
                    <Route path="/portfolio">asdasd</Route>
                    <Route path="/">
                        <Headline />
                        <Container>
                            <Section size="medium">
                                <Topics />
                            </Section>
                            <Section>
                                <Link to="/portfolio">
                                    <Portfolio />
                                </Link>
                            </Section>
                        </Container>
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
