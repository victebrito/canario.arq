import "./Headline.scss";
import { Button, Columns, Container, Hero } from "react-bulma-components";
import React from "react";
import { ReactComponent as Pattern } from "./assets/pattern.svg";

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
                            <strong>CONTATO</strong>
                        </Button>
                    </div>
                </Container>
                <div className="spacer-bottom ">&nbsp;</div>
            </div>
        </Hero>
    );
}

export default Headline;
