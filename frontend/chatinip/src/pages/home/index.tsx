import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import chatlogo from '../../assets/logoBrand.png'
import { MainSection, AboutSection, SignSection, About, SignButton, FooterAuthor } from '../../styles/home';
import { WebContext } from '../../context';


export const HomePage = () => {
     const navigate = useNavigate();
    const { token } = useContext(WebContext);

    const goSignUp = () => navigate('/signup');
    const goSignIn = () => {
        if(!token){navigate('/signin');}
        else{navigate('/chat');}
        
    }
    return (
    <>
    <MainSection>
        <AboutSection>
            <a href="/"><img src={chatlogo} className='logo' alt="Chatinip Messenger" /></a>
            <h1>Web Messenger</h1>
            <About> 
                Sistema de mensagens instantâneas com canais individuais e comunicação direta. Escolha uma das opções para ingressar no sistema.
            </About>
        </AboutSection>
        <SignSection>
            <SignButton onClick={goSignIn}>
                Entrar
            </SignButton>
            <SignButton onClick={goSignUp}>
                Registrar
            </SignButton>
        </SignSection>
    </MainSection>
    <FooterAuthor>Desenvolvido por <a href="https://mh.app.br" target='_blank'>MH Marques</a></FooterAuthor>
    </>
    )
}