import styled from "styled-components"

export const MainSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    padding: 15px 0 50px;
`;

export const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
    
    background-color: var(--gray-2);
    width: 90%;
    max-width: 420px;
    min-height: 420px;
    max-height: 720px;

    text-align: center;

    .logo {
        height: 180px;
        will-change: filter;
        transition: filter 300ms;
        margin-top: 20px;
    }

    .logo:hover {
        filter: drop-shadow(0 0 10px var(--boxShadow));
    }

    h1{
        color: var(--white-fixed);
        font-size: 42px;
    }
`;

export const About = styled.p`
    max-width: 360px;
    width: 80%;
    margin-bottom: 20px;

    text-align: justify;
    font-size: 16px;
    font-weight: 300;
`;

export const SignSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
    
    background-color: var(--gray-1);
    padding: 35px auto;
    width: 90%;
    max-width: 420px;
    min-height: 420px;
    max-height: 720px;

    h5 {
        font-size: 14px;
        font-weight: 300;
    }
`;

export const SignButton = styled.button`
    color: var(--white-fixed);
    margin: 5px auto;
    width: 100%;
    max-width: 210px;
`;

export const SignInput = styled.input`
    width: 100%;
    max-width: 210px;
    margin: 5px auto;
`;

export const FooterAuthor = styled.p`
    background-color: var(--brand-bg);
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    min-height: 35px;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
`;