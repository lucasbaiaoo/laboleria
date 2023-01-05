import { clientInfoRepository } from "../repositories/clientsRepository.js";

export async function postClientsController(req, res){
    const {name, address, phone} = req.body;
 
    try{
     await clientInfoRepository(name, address, phone);
     res.sendStatus(201);
    } catch (error) {
       console.log(error);
       res.sendStatus(500);
    }
 }