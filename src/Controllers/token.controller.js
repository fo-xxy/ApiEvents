import { firmar } from "../firmarToken";
import {getConnection} from "./../Database/database";

//Método que obtiene el token
const getToken = async (req, res) => {
    try {
        const {userName, document} = req.params;


        console.log(req.params);

        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM tbl_admin WHERE userName = ? AND document = ?", [userName, document]);
        console.log(result);

        if(result == ""){
            res.status(200).json({message: "No se pudo generar el Token, el usaurio no ha sido encontrado."})
            return;
        }

        const token = await firmar({
            userName: result[0].userName,
            document: result[0].document
        });

        res.json({
            token
        }); 
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

export const methods = {
    getToken
};