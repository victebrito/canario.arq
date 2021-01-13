import "./Topics.scss";
import { Columns } from "react-bulma-components";
import { ReactComponent as CreativityIllu } from "./assets/ilustrations/undraw_new_ideas_jdea.svg";
import { ReactComponent as HumanIllu } from "./assets/ilustrations/undraw_flowers_vx06.svg";
import { ReactComponent as TransforIllu } from "./assets/ilustrations/undraw_building_blocks_n0nc.svg";

function Topics() {
    return (
        <div>
            <Columns>
                <Columns.Column>
                    <div className="topic">
                        <div className="illustration">
                            <CreativityIllu />
                        </div>
                        <h3>criatividade</h3>
                        <p>
                            O nome Canário foi escolhido como símbolo de um pássaro explorador,
                            típico da fauna brasileira, trazendo aspectos de liberdade, delicadeza,
                            carisma, brasilidade e o desejo de desbravar o novo.
                        </p>
                    </div>
                </Columns.Column>
                <Columns.Column>
                    <div className="topic">
                        <div className="illustration">
                            <HumanIllu />
                        </div>
                        <h3>humanização</h3>
                        <p>
                            Inspirado num senso de aventura e descobrimento do novo, a Canário
                            Arquitetura nasceu com o desejo de transformação e comunicação.
                        </p>
                    </div>
                </Columns.Column>
                <Columns.Column>
                    <div className="topic">
                        <div className="illustration">
                            <TransforIllu />
                        </div>
                        <h3>transformação</h3>
                        <p>
                            A criação do nome da marca foi inspirada na história de Amelia Earhart,
                            a primeira mulher a cruzar o Oceâno Atlântico em seu avião amarelo,
                            Canary.
                        </p>
                    </div>
                </Columns.Column>
            </Columns>
        </div>
    );
}

export default Topics;
