import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId:string) => {
    const deleteUserRepo = AppDataSource.getRepository(User);
    
    await deleteUserRepo
        .createQueryBuilder("users")
        .delete()
        .where("id = :id", { id: userId })
        .execute()

    return;
}

export default deleteUserService;