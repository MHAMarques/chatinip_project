import AppError from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const loginService = async (loginInfo:IUserLogin) => {
    const userRepo = AppDataSource.getRepository(User);
    
    const checkEmail = loginInfo.email;
    const checkPassword = loginInfo.password;
    const checkActive = true;

    const loginUser = await userRepo.findOneBy({email: checkEmail});
    if(String(loginUser) == 'null'){
        throw new AppError(403, 'Invalid login information.');
    }
    
    if(!loginUser.isActive){
        throw new AppError(423, 'Login locked. Permission required.');
    }

    const loginPassword = await compare(checkPassword, loginUser.password);
    if(!loginPassword){
        throw new AppError(403, 'Invalid login information.');
    }

    const token = jwt.sign(
        {
            isAdmin: loginUser.isAdmin
        },
        process.env.SECRET_KEY,
        {
            subject: loginUser.id,
            expiresIn: '24h'
        });
    
    return {token :token}
}

export default loginService;