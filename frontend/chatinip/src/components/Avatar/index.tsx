import { AvatarDiv } from "../../styles/chat"

type AvatarProps = {
    username: string | null | undefined;
}

export const Avatar = ({username}: AvatarProps) => {
    const firstName = username?.toString();
    const colorPicker = (char: string) => {
        const colors = [
            '#C4DEF6', '#9AC2E8', '#6DA6D4', '#498CC6', '#2E74B2',
            '#1C5F9D', '#13518E', '#0D427B', '#083063', '#052647',
            '#052647', '#052647', '#052647', '#052647', '#052647'
          ];
          
          
        const charCode = char.charCodeAt(0);
        const index = charCode % colors.length;
        return colors[index];
    };

    const chosenColor = colorPicker(firstName? firstName:'A');
    return(
        <AvatarDiv color={chosenColor}>
            <p>{firstName}</p>
        </AvatarDiv>
    )
}