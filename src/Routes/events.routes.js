import { Router } from "express";
import {methods as eventsController} from "../Controllers/events.controller";
import {methods as verific} from "../auth";

//Nos permite manejar las rutas
const router = Router();

router.get("/", verific.verifyToken, eventsController.getEvents);
router.post("/", verific.verifyToken, eventsController.addEvents);
router.get("/:idEvent", verific.verifyToken, eventsController.getEvent);
router.put("/:idEvent", verific.verifyToken, eventsController.updateEvent);
router.delete("/:idEvent", verific.verifyToken, eventsController.deleteEvent);


//Exporta las funciones
export default router;