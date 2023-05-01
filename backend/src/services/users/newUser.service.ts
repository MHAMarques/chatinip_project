import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/user.schemas";
import { hashSync } from "bcrypt";

const newUserService = async (userInfo:IUserRequest) => {
    userInfo.password = hashSync(userInfo.password, 10);
    
    const userRepo = AppDataSource.getRepository(User);    
    const newUser = userRepo.create(userInfo);
    
    await userRepo.save(newUser);
    const returnUser = await userResponseSchema.validate(newUser, {stripUnknown: true})
    
    return returnUser;
}

export default newUserService;