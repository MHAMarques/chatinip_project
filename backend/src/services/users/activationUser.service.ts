import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { userResponseSchema, updateUserSchema, activationUserSchema } from "../../schemas/user.schemas";

const actvationUserService = async (userId:string) => {
    const userRepo = AppDataSource.getRepository(User);
    const userData: IUser = await userRepo.findOneBy({id: userId});
    
    let userInfo = {
        isActive:true
    }
    if(userData.isActive){
        userInfo = {isActive:false}
    }

    const validUser = await activationUserSchema.validate(userInfo, {stripUnknown: true})
    const updateUser = userRepo.create({
        ...userData,
        ...validUser
    })
    await userRepo.save(updateUser);
    
    const returnUser = await userResponseSchema.validate(updateUser, {stripUnknown: true});
    return returnUser;
}

export default actvationUserService;