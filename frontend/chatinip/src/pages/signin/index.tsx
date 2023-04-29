import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { MainSection, AboutSection, SignSection, About, SignButton, SignInput, FooterAuthor } from '../../styles/home'
import { IUserLogin } from '../../interfaces'
import { WebContext } from '../../context'
import chatlogo from '../../assets/logoBrand.png'

export const SignInPage = () => {
    const yupSchema = yup.object().shape({
        email: yup.string().required("Preencha o campo com um email válido.").email("Email inválido"),
        password: yup.string().required("Preencha o campo com uma senha."),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({ resolver: yupResolver(yupSchema) })
    const { userSignIn } = useContext(WebContext);
    
    return (
    <>
    <MainSection>
        <AboutSection>
            <a href="/"><img src={chatlogo} className='logo' alt="Chatinip Messenger" /></a>
            <h1>Web Messenger</h1>
            <About>Não possui uma conta de acesso? <a href="/signup">Clique aqui</a> para registrar</About>
        </AboutSection>
        <SignSection>
            <form onSubmit={handleSubmit(userSignIn)}>
                <SignInput type="email" {...register("email")} placeholder='E-mail de acesso' title='Preencha com um e-mail válido' required />
                <span>{errors.email?.message}</span>
                
                <SignInput type="password" {...register("password")} placeholder='Senha de acesso' title='Preencha com uma senha de acesso' required />
                <span>{errors.password?.message}</span>

                <SignButton type="submit">Acessar</SignButton>
            </form>
        </SignSection>
    </MainSection>
    <FooterAuthor>Desenvolvido por <a href="https://mh.app.br" target='_blank'>MH Marques</a></FooterAuthor>
    </>
    )
}