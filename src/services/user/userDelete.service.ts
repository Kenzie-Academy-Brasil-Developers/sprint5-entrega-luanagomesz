import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


const userDeleteService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User) 

    const selectedUser = await userRepository.findOneBy({id:id})

    if(!selectedUser){
        throw new Error("User not Found")
    }else{
        await userRepository.remove(selectedUser)
        return {"message": `${selectedUser.name} has been deleted`}
    }

    
    
}

export default userDeleteService
        