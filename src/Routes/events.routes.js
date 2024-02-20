import { Router } from "express";
import {methods as eventsController} from "../Controllers/events.controller";

//Nos permite manejar las rutas
const router = Router();


router.get("/", eventsController.getEvents);

//Exporta las funciones
export default router;