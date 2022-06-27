import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser} from "../../interfaces/user/index";


const updateUserService = async ({id,name, email, age, password}: IUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    
        const users = await userRepository.find()

        const account = users.find(user => user.id === id)
        if(!account){
            throw new Error("User not Found")
        }
        let updated_at = new Date().toISOString()
        await userRepository.update(account!.id, { name: name, email: email, age: age, password: password, updated_at: updated_at })
        
        return {name: name, email: email, age: age}
   
}

export default updateUserService
