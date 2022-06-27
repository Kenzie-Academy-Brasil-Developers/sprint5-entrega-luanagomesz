import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"
import userListOneController from  "../controllers/user/userListOne.controller"
import updateUserController from "../controllers/user/userUpdate.controller"
import userDeleteController from "../controllers/user/userDelete.controller"
routes.post('/users', userCreateController)
routes.get('/users', userListController)
routes.get('/users/:id', userListOneController )
routes.patch('/users/:id',updateUserController)
routes.delete('/users/:id', userDeleteController)

export default routes