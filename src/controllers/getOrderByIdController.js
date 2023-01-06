import { orderByIdRepository, ordersIdsRepository } from "../repositories/ordersRepository.js";
import dayjs from "dayjs";

export async function getOrderByIdController(req, res){
    const id = parseInt(req.params.id);

    try{
        const ordersIds = await ordersIdsRepository(); 
        let arrayOrdersIds = [];
        
        for (let i = 0; i < ordersIds.rows.length; i++){
          arrayOrdersIds.push(ordersIds.rows[i].id)
        }

        const orderById = await orderByIdRepository(id);

        if(arrayOrdersIds.includes(id) === false){
          res.status(404).send([]);
          return;
        }
        
        const estructuredOrderById = orderById.rows.map((order) => ({
          "client":{
            "id":order.clientId,
            "name":order.clientName,
            "address":order.address,
            "phone":order.phone
          },
          "cake":{
            "id":order.cakeId,
            "name":order.cakeName,
            "price":parseInt(order.price).toFixed(2),
            "description":order.description,
            "image":order.image
          },
          "orderId":order.orderId,
          "createdAt":dayjs(order.createdAt).format('YYYY-MM-DD HH:mm'),
          "quantity":order.quantity,
          "totalPrice":parseInt(order.totalPrice).toFixed(2)
        }));
        
        res.status(200).send(estructuredOrderById)
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
}