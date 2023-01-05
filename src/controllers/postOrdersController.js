import { orderInfoRepository } from "../repositories/ordersRepository.js";

export async function postOrdersController(req, res){
    const { clientId, cakeId, quantity, totalPrice } = req.body;
 
    try{
     await orderInfoRepository(clientId, cakeId, quantity, totalPrice);
     res.sendStatus(201);
    } catch (error) {
       console.log(error);
       res.sendStatus(500);
    }
 }