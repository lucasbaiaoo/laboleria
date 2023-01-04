import { cakeSchema } from "../models/cakeModel.js";

export async function cakeMiddleware(req, res, next){
    
    const {name, price, description} = req.body;

       if(name.length < 2){
        res.sendStatus(400);
        return;
       }
       
       if(price <= 0){
        res.sendStatus(400);
        return;
       }
    
       if(typeof description !== "string"){
        res.sendStatus(400);
        return;
       }

      const validation = cakeSchema.validate(req.body, {abortEarly: false}); 
  
      if(validation.error){
          const errors = validation.error.details.map((detail) => detail.message);
          res.status(422).send(errors);
          return;
      }

      next();
}