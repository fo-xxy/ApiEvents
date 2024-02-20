import express  from "express";
import morgan from "morgan";

//Express es un framework para crear servidor web que maneje rutas
const app =express();

app.set("port", 3000);

//Middlewares, intermediarios en una petición y una respuesta
//Se usará en modod de desrrollo, en la comsola se verá un detalle de las peticiones que hacemos
app.use(morgan("dev"));


//Se exporta la app, para utilizarla externamente
export default app;


