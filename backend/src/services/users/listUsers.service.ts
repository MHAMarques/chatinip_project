import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { userListSchema } from "../../schemas/user.schemas";

const listUsersService = async (): Promise<IUser[]> => {
    const userRepo = AppDataSource.getRepository(User);
    const listUsers = await userRepo
    .createQueryBuilder("user")
    .getMany();
    
    const returnInfo = await userListSchema.validate(
        listUsers,
        {
            stripUnknown: true,
        }
    );
    return returnInfo;
}

export default listUsersService;