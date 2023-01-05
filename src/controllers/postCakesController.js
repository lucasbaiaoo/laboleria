import { cakeInfoRepository } from "../repositories/cakesRepository.js";

export async function postCakesController(req, res){
   const {name, price, image, description} = req.body;

   try{
    await cakeInfoRepository(name, price, image, description);
    res.sendStatus(201);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
}