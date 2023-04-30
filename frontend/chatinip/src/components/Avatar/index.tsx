import { AvatarDiv } from "../../styles/chat"

type AvatarProps = {
    username: string | null | undefined;
}

export const Avatar = ({username}: AvatarProps) => {
    const firstName = username?.toString();
    const colorPicker = (char: string) => {
        const colors = [
            '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
            '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
            '#8BC34A', '#CDDC39', '#FFC107', '#FF9800', '#FF5722'
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