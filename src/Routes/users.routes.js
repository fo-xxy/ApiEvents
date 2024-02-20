import { Router } from "express";
import {methods as usersController} from "../Controllers/users.controller";

//Nos permite manejar las rutas
const router = Router();


router.get("/", usersController.getUsers);
router.post("/", usersController.addUsers);
router.get("/:idUser", usersController.getEvent);
router.put("/:idUser", usersController.updateUser);
router.delete("/:idUser", usersController.deleteUser);

//Exporta las funciones
export default router;