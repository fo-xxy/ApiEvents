import { Router } from "express";
import {methods as usersController} from "../Controllers/users.controller";
import {methods as tokenController} from "../Controllers/token.controller";
import {methods as verific} from "../auth";

//Nos permite manejar las rutas
const router = Router();

router.get("/", verific.verifyToken, usersController.getUsers);
router.post("/", verific.verifyToken, usersController.addUsers);
router.get("/:idUser", verific.verifyToken, usersController.getUser);
router.put("/:idUser", verific.verifyToken, usersController.updateUser);
router.delete("/:idUser", verific.verifyToken, usersController.deleteUser);


router.get("/Token/:userName/:document", tokenController.getToken);

//Exporta las funciones
export default router;