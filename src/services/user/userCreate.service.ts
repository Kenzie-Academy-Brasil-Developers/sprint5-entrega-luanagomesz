
import { IUserCreate, IUser } from "../../interfaces/user/index";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userCreateService = async ({name, email, password, age}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 

    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    user.age = age
    user.created_at = new Date().toISOString()
    user.updated_at = new Date().toISOString()

    userRepository.create(user)
    await userRepository.save(user)
    const selectedUser = await userRepository.findOneBy({id:user.id})

    return selectedUser

}

export default userCreateService
        