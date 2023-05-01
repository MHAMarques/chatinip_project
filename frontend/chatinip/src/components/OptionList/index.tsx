import { ListDiv } from "../../styles/chat"

export const OptionList = () => {
    //
    return(
        <ListDiv>
            <h2>Opções</h2><hr />
            <ul>
                <li>Θ <a href="?log=off">Editar</a></li>
                <li>Θ <a href="?log=off">Sair</a></li>
            </ul>
        </ListDiv>
    )
}