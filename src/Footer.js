import "./Footer.scss";
import { Columns, Container } from "react-bulma-components";
import { Footer as Footr } from "react-bulma-components";
import Photo from "./assets/photos/photo.png";

function Footer() {
    return (
        <div>
            <div className="pre-footer">&nbsp;</div>

            <Footr>
                <Container>
                    <Columns>
                        <Columns.Column>
                            <div className="image">
                                <img src={Photo} height="200px" width="200px" align="right" />
                            </div>
                        </Columns.Column>
                        <Columns.Column>
                            <div className="contact-info">
                                <h2>Laís Guerra</h2>
                                <p className="ftr-p">Arquiteta e Urbanista</p>
                                <p className="ftr-p mt-6">contato@canarioarquitetura.com.br</p>
                            </div>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Footr>
        </div>
    );
}

export default Footer;
