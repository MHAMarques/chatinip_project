import { ListDiv } from "../../styles/chat"

type DirectListProps = {
    isAdmin: boolean | undefined;
}

export const OptionList = ({isAdmin}: DirectListProps) => {
    //
    return(
        <ListDiv>
            <h2>Opções</h2><hr />
            <ul>
                {isAdmin? <li>Θ <a href="?edit=user">Gerenciar</a></li> : ''}
                <li>Θ <a href="?log=off">Sair</a></li>
            </ul>
        </ListDiv>
    )
}