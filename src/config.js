//permite ejecutar la funcion config
import { config } from "dotenv";

//Pone a disposición las variables de entorno que hayamos defino o declarado en .env
config();

export default {
    host: process.env.HOST,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD
};