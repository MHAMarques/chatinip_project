import { ListDiv } from "../../styles/chat"

export const OptionList = () => {
    //
    return(
        <ListDiv>
            <h2>Acesso</h2><hr />
            <ul>
                <li>≡ <a href="?log=off">Editar</a></li>
                <li>Θ <a href="?log=off">Desconectar</a></li>
            </ul>
        </ListDiv>
    )
}