import {getConnection} from "./../Database/database";

//Método que lista todos los eventos
const getEvents = async (req, res) => {
    try {
       const connection= await getConnection();
       const result = await connection.query("SELECT * FROM tbl_eventos");
       res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

export const methods ={
    getEvents
}