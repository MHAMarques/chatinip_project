import styled from "styled-components"

export const MainChat = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-height: 100vh;
`;

export const AsideInfo = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:10vh;
    
    background-color: var(--gray-2);
    width: 25%;
    height: 100vh;
    max-width: 280px;
    min-width: 240px;
    padding: 10px;

    text-align: left;
    overflow-y: auto;
    z-index: 1;
    .logo {
        height: 42px;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 10px var(--boxShadow));
    }
    
`;

export const SideProfile = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    width: 100%;

    div {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
    }
    h5 {
        font-size: 16px;
    }
    span {
        font-size: 12px;
    }
`;

export const MessengerChat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:15px;
    
    padding: 35px auto;
    width: 100%;
    min-height: 100vh;

    article {
        width: 100%;
        padding: 10px;

        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        
    }
    h4 {
        font-size: 16px;
        color: var(--gray-4);
    }
    hr {
        width: 100%;
        border: 1px solid var(--gray-2);
        margin-top: 10px;
    }
    ul {
        overflow-y: auto;
        height: auto;
        max-height: 90vh;
        width: 100%;
        margin-bottom: -40px;
    }
    
`;

export const MessageItem = styled.li`
    margin: 15px 5px;
    background-color: var(--gray-2);
    padding: 5px 0.8rem;
    border-radius: 8px;

    .sender {
        text-align: right;
    }
    
    .receiver {
        text-align: left;
    }

    .reverser {
        flex-direction: row-reverse;
    }

    h3 {
        font-size: 16px;
        font-weight: 300;
        color: var(--white-fixed);
    }
    h4 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        font-size: 14px;
        font-weight: 500;
    }
    small{
        font-size: 10px;
        padding: 0px 10px;
        color: var(--gray-3);
    }
`;

export const ChatInput = styled.div`
    position: relative;
    width: 100%;
    padding: 10px;

    input {
        width: 100%;
        background-color: var(--gray-1);
        color: var(--gray-6);
        padding: 0px 80px 0px 10px;
    }

    button{
        position: absolute;
        right: 10px;
        width: 80px;
    }
`;

export const AvatarDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    font-size: 21px;
    font-weight: 700;
    padding: 0px 0px 2px 1px;

    width: 42px;
    height: 42px;
    will-change: filter;
    transition: filter 300ms;

    background-color: ${(props) => props.color};
    color: var(--white-fixed);
    text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
    border-radius: 50%;
    border: 1px solid var(--black-fixed);

    :hover {
        filter: drop-shadow(0 0 10px var(--boxShadow));
    }

    p {
        width: 100%;
        text-align: center;
    }
`;

export const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap:15px;
    
    padding: 35px auto;
    width: 100%;

    hr {
        width: 100%;
        border: 1px solid var(--gray-1);
        margin-top: -10px;
    }
    ul {
        width: 100%;
    }
    li {
        margin: 10px;
    }
    
`;
