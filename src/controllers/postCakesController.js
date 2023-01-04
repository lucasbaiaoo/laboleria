import { cakeInfoRepository, cakesNamesConflictVerificationRepository } from "../repositories/cakesRepository.js";

export async function postCakesController(req, res){
   const {name, price, image, description} = req.body;

   try{
    const cakesNames = await cakesNamesConflictVerificationRepository();
    
        for (let i = 0; i < cakesNames.rows.length; i++) {
          if (cakesNames.rows[i].name === name) {
            res.sendStatus(409);
            return;
          }
        }

    await cakeInfoRepository(name, price, image, description);
    res.sendStatus(201);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
}