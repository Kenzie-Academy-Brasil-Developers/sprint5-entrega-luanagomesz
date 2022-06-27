import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


const userListOneService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User) 

    const selectedUser = await userRepository.findOneBy({id:id})

    if(!selectedUser){
        throw new Error("User not Found")
    }else{
        return selectedUser
    }



}

export default userListOneService
        