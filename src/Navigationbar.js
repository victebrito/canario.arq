import "./Navigationbar.scss";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { Button, Navbar } from "react-bulma-components";

function Navigationbar() {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item>
                    <Logo />
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Container position="end">
                <Navbar.Item>
                    <Button className="is-primary is-rounded is-small">
                        <a href="http://wa.link/wg851z">
                            <strong>CONTATO</strong>
                        </a>
                    </Button>
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
    );
}

export default Navigationbar;
