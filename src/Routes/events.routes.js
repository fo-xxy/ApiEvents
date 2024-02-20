import { Router } from "express";
import {methods as eventsController} from "../Controllers/events.controller";

//Nos permite manejar las rutas
const router = Router();


router.get("/", eventsController.getEvents);
router.post("/", eventsController.addEvents);
router.get("/:idEvent", eventsController.getEvent);
router.put("/:idEvent", eventsController.updateEvent);
router.delete("/:idEvent", eventsController.deleteEvent);

//Exporta las funciones
export default router;