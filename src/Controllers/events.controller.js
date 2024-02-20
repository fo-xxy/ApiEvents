import {getConnection} from "./../Database/database";

//Método que lista todos los eventos
const getEvents = async (req, res) => {
    try {
       const connection= await getConnection();
       const result = await connection.query("SELECT * FROM tbl_events");
       res.json(result); 
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

//Método que agrega nuevos eventos
const addEvents = async (req, res) =>{
    try {

        const {nameEvent, dateEvent, capacity} = req.body;

        console.log(req.body);

        if(nameEvent == "" || dateEvent == "" || capacity == ""){
            res.status(400).json({message: "Debes llenar todos los campos."})
            return;
        }

        const objEvent = {
            nameEvent,
            dateEvent,
            capacity
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_events SET ?",objEvent);

        res.json({message:"Evento agregado correctamente."});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Método que busca un evento por el id
const getEvent =async (req, res) => {
    try {
        const {idEvent} = req.params;

        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM tbl_events WHERE idEvent = ?", idEvent);

        if(result == ""){
            res.status(200).json({message: "No se encontraron datos"})
            return;
        }

       res.json(result);
       
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

//Método que actualiza un registro
const updateEvent =async (req, res) => {
    try {
        const {idEvent} = req.params;
        const {nameEvent, dateEvent, capacity} = req.body;

        if(nameEvent == "" || dateEvent == "" || capacity == ""){
            res.status(400).json({message: "Debes llenar todos los campos."})
            return;
        }

        const objEvent = {
            nameEvent,
            dateEvent,
            capacity
        };

       const connection= await getConnection();
       const result = await connection.query("UPDATE tbl_events SET ? WHERE idEvent = ?",[objEvent, idEvent] );

       if (result.affectedRows > 0) {
        res.status(200).json({ message: `Se actualizó ${result.affectedRows} registro(s) correctamente.` });
        return;
    }
    
    res.status(200).json({ message: "No se actualizó ningun registro." });
       
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

//Método que elimina un evento
const deleteEvent =async (req, res) => {
    try {
        const {idEvent} = req.params;

       const connection= await getConnection();
       const result = await connection.query("DELETE FROM tbl_events WHERE idEvent = ?", idEvent);

       if (result.affectedRows === 0) {
        res.status(200).json({ message: "No se encontraron datos para eliminar." });
        return;
    }

    res.status(200).json({ message: "Evento eliminado correctamente." });
       
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};
   
export const methods = {
    getEvents,
    addEvents,
    getEvent,
    updateEvent,
    deleteEvent
    
};
