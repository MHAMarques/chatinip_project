import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { SignInPage } from "../pages/signin";
import { SignUpPage } from "../pages/signup";
import { HomePage } from "../pages/home";
import { ChatPage } from "../pages/chat";

export const RoutesApp = () =>{
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/chat" element={<ChatPage />} />
        </Routes>
    );
}