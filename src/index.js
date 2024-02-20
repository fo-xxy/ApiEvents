
import app from "./app";
//Función princiapl ->Ejecución del servidor
const main=()=>{
    app.listen(app.get("port"));
    console.log('Server on port ' + app.get('port'));
};

main();