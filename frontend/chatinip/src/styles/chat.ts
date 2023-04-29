import styled from "styled-components"

export const MainChat = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    min-height: 100vh;
`;

export const AsideChat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:15px;
    
    background-color: var(--gray-2);
    width: 25%;
    height: 100%;
    max-width: 320px;
    min-width: 240px;
    min-height: 100vh;
    padding: 5px;

    text-align: left;
    position: relative;
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

export const FooterAuthor = styled.p`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    min-height: 35px;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
`;