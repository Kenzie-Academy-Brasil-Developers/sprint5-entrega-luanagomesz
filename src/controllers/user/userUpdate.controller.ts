import { Request, Response } from 'express'
import updateUserService from '../../services/user/userUpdate.service'
import { IUser } from '../../interfaces/user'
const updateUserController = async (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const {name, email, age, password}:IUser = req.body

        const user = await updateUserService({id, name, email, age, password})
       
        return res.status(201).send(user)
    } catch (err) {

        if (err instanceof Error) {

            return res.status(401).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}


export default updateUserController