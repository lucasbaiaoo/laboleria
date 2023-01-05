import { clientSchema } from "../models/clientModel.js";

export async function clientMiddleware(req, res, next){
    
    const {name, address, phone} = req.body;
    const isOnlyNumbers = /^\d+$/.test(phone);

       if(name.length === 0){
        res.sendStatus(400);
        return;
       }
       
       if(address.length === 0){
        res.sendStatus(400);
        return;
       }
    
       if(phone.length === 0 || typeof phone !== "string" || phone.length < 10 || phone.length > 11 || isOnlyNumbers !== true ){
        res.sendStatus(400);
        return;
       }

      const validation = clientSchema.validate(req.body, {abortEarly: false}); 
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}