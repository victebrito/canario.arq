import { Columns, Container } from "react-bulma-components";
import Photo1 from "./assets/photos/loja1.png";
import Photo2 from "./assets/photos/cozinha1.png";
import Photo3 from "./assets/photos/quarto1.png";
import { ReactComponent as PortfolioIcon } from "./assets/icons/selo-puleiro.svg"
import "./Portfolio.scss";

function Portfolio() {
    return (
        <div>
            <Container>
                <h1 className="headLine">portfolio</h1>
                <Columns>
                    <Columns.Column size={7}>
                            <img src={Photo1} className="image"></img> 
                       
                    </Columns.Column>
                    <Columns.Column size={5}>
                            <img src={Photo2} className="image"/>
                            <img src={Photo3} className="image"/>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>
    );
}

export default Portfolio;
