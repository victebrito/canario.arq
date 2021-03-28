import "./Headline.scss";
import { Button, Container, Hero } from "react-bulma-components";
import { ReactComponent as Pattern } from "./assets/ilustrations/pattern.svg";
import { ReactComponent as PatternMobile } from "./assets/ilustrations/pattern-mobile.svg";

function Headline() {
    return (
        <Hero>
            <div className="banner">
                <div className="spacer-top">&nbsp;</div>
                <div className="pattern">
                    <Pattern />
                </div>
                <Container>
                    <div className="headLine">
                        <h1>Transfor-mação</h1>
                        <p>
                            Um escritório singular e dinâmico, que carrega em suas formas fortes e
                            delicadas: expressão de liberdade, inteligência e paixão criativa.
                        </p>
                        <Button className="is-primary is-rounded is-small">
                            <a href="http://wa.link/wg851z" target="_blank">
                                <strong>CONTATO</strong>
                            </a>
                        </Button>
                    </div>
                </Container>
                <div className="spacer-bottom ">
                    &nbsp;
                    <div className="pattern-mobile">
                        <PatternMobile />
                    </div>
                </div>
            </div>
        </Hero>
    );
}

export default Headline;
