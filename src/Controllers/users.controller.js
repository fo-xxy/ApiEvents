import {getConnection} from "./../Database/database";

//Método que lista todos los eventos
const getUsers = async (req, res) => {
    try {
       const connection= await getConnection();
       const result = await connection.query("SELECT * FROM tbl_users");
       res.json(result); 
    } catch (error) {
       res.status(500);
       res.send(error.message);
    }  
};

//Método que agrega nuevos eventos
const addUsers = async (req, res) =>{
    try {

        const {nameUser, age, address} = req.body;

        console.log(req.body);

        if(nameUser == "" || age == "" || address == ""){
            res.status(400).json({message: "Debes llenar todos los campos."})
            return;
        }

        const objUser = {
            nameUser,
            age,
            address
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_users SET ?", objUser);

        res.json({message:"Evento agregado correctamente."});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Método que busca un evento por el id
const getEvent =async (req, res) => {
    try {
        const {idUser} = req.params;

        const connection= await getConnection();
        const result = await connection.query("SELECT * FROM tbl_users WHERE idUser = ?", idUser);

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
const updateUser =async (req, res) => {
    try {
        const {idUser} = req.params;
        const {nameUser, age, address} = req.body;

        if(nameUser == "" || age == "" || address == ""){
            res.status(400).json({message: "Debes llenar todos los campos."})
            return;
        }

        const objUser = {
            nameUser,
            age,
            address
        };

       const connection= await getConnection();
       const result = await connection.query("UPDATE tbl_users SET ? WHERE idUser = ?",[objUser, idUser] );

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
const deleteUser =async (req, res) => {
    try {
        const {idUser} = req.params;

       const connection= await getConnection();
       const result = await connection.query("DELETE FROM tbl_users WHERE idUser = ?", idUser);

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
    getUsers,
    addUsers,
    getEvent,
    updateUser,
    deleteUser
    
};