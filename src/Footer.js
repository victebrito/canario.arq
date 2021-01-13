import "./Footer.scss";
import { Columns, Container, Content } from "react-bulma-components";
import { Footer as Footr } from "react-bulma-components";

function Footer() {
    return (
        <div>
            <div className="pre-footer">&nbsp;</div>

            <Footr>
                <Container>
                    <Columns>
                        <Columns.Column>
                            <div className="image">
                                <span>Image here</span>
                            </div>
                        </Columns.Column>
                        <Columns.Column>
                            <h2>Laís Guerra</h2>
                            <p className="ftr-p">Arquiteta e Urbanista</p>
                            <p className="ftr-p mt-6">contato@canarioarquitetura.com.br</p>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Footr>
        </div>
    );
}

export default Footer;
