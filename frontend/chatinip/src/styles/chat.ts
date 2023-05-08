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
    justify-content: space-between;
    align-items: center;
    gap:5px;
    
    background-color: var(--gray-2);
    width: 25%;
    height: 100vh;
    max-width: 280px;
    min-width: 240px;
    padding: 10px;
    border-right: 1px solid var(--black-fixed);

    text-align: left;
    overflow-y: auto;
    z-index: 1;

    @media screen and (max-width: 580px) {
      display: none;
    }

    .logo {
        height: 42px;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 10px var(--boxShadow));
    }

    h2 {
        font-size:20px;
        font-weight: 500;
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
    max-height: 100vh;

    @media screen and (max-width: 580px) {
        padding-top: 60px;
    }
    
    article {
        width: 100%;
        height: 90vh;
        padding: 10px;

        font-size: 14px;
        font-weight: 300;
        text-align: justify;
        @media screen and (max-width: 580px) {
            max-height: 80vh;
        }
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
        max-height: 88vh;
        width: 100%;
        margin-bottom: -40px;
        @media screen and (max-width: 580px) {
            max-height: 78vh;
        }
    }
    
`;

export const MessageItem = styled.li`
    margin: 25px 10px;
    background-color: var(--gray-2);
    border-radius: 8px;
    border: 2px solid var(--black-fixed);

    .sender {
        text-align: right;
    }
    
    .receiver {
        text-align: left;
    }

    .reverser {
        flex-direction: row-reverse;
        background-color: var(--gray-1);
    }

    h3 {
        font-size: 16px;
        font-weight: 300;
        padding: 15px;

        text-align: justify;
        color: var(--white-fixed);
    }
    h4 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        font-size: 14px;
        font-weight: 500;
        padding: 5px 10px;

        background-color: var(--gray-0);
        border-radius: 6px 6px 0px 0px;
        border-bottom: 1px solid var(--black-fixed);
    }
    small{
        font-size: 10px;
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

export const ChatChanForm = styled.form`
    position: relative;

    input {
        padding-right: 50px;
        max-width: 100%;
    }

    button {
        position: absolute;
        top: 3px;
        right: 3px;
        padding: 0px 5px;
        max-height: 29px;
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
        border: 1px solid var(--black-fixed);
        margin-top: -10px;
    }

    ul {
        width: 100%;
    }

    li {
        margin: 10px;
    }
    
    small {
        font-size: 10px;
        padding-left: 15px;
    }
`;

export const SelectMenu = styled.section`

    @media screen and (min-width: 581px) {
        display: none;
    }

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    background-color: var(--gray-1);
    position: fixed;
    top:0;
    z-index: 2;

    width: 100%;
    min-height: 60px;

    select {
        background-color: var(--gray-2);
        color: var(--white-fixed);

        height: 35px;
        width: 80vw;
        padding: 0;

        font-size: 15px;
        font-weight: 500;
        text-align: center;

        optgroup {
            color: var(--white-fixed);
            font-size: 16px;
            font-weight: 700;
        }
    }
`;

export const HomeSection = styled.section`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .backG {
        position: absolute;

        height: 180px;
        filter: grayscale(100%);
        opacity: 0.1;

        @media screen and (max-width: 580px) {
           width: 80%;
           height: auto;
           max-width: 120px;
        }
    }

    hr {
        width: 100%;
        border: 1px solid var(--gray-0);
        margin-top: 10px;
    }

    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        gap: 25px;

        width: 100%;
        padding: 15px;

    }

    li {
        background-color: var(--gray-0);
        padding: 10px 5px 10px 15px;
        width: 250px;

        border: 2px solid var(--black-fixed);
        border-radius: 5px;
    }

    .inactive {
        display: none;
    }
`;