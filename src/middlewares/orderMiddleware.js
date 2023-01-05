import { clientsIdsRepository } from "../repositories/clientsRepository.js";
import { cakesIdsRepository } from "../repositories/cakesRepository.js";
import { orderSchema } from "../models/orderModel.js";

export async function orderMiddleware(req, res, next){
    const { clientId, cakeId, quantity } = req.body;

    try{
      const clientsIds = await clientsIdsRepository();
      const clientsIdsArray = [];
      const cakesIds = await cakesIdsRepository();
      const cakesIdsArray = [];
    
        for (let i = 0; i < clientsIds.rows.length; i++) {
          clientsIdsArray.push(clientsIds.rows[i].id)
          }

        if(clientsIdsArray.includes(clientId) === false){
          res.sendStatus(404);
          return
        }

        for (let i = 0; i < cakesIds.rows.length; i++) {
          cakesIdsArray.push(cakesIds.rows[i].id)
          }

        if(cakesIdsArray.includes(cakeId) === false){
          res.sendStatus(404);
          return
        }  


       } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
       }

      if(quantity <= 0 || quantity >= 5){
        res.sendStatus(400);
        return;
      }
       
      const validation = orderSchema.validate(req.body, {abortEarly: false}); 
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}