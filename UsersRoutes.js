import { Router } from "express";
import { getAllUsers,addUsers,updateUsers,getUsersById,deleteUsers,createRoleUsers,getUsersRoles,userLogin } from "../controllers/Users.js";
const router = Router()

router
.get('/', getAllUsers)
    .post('/', addUsers)
    .get('/:id', getUsersById)
    .put('/:id', updateUsers)
    .get('/:id/roles', getUsersRoles)
    .post('/:id/roles', createRoleUsers)
    .delete('/:id', deleteUsers)
    .post('/login', userLogin)

    export default router
