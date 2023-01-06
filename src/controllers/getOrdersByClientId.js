import { clientsIdsRepository } from "../repositories/clientsRepository.js";
import { orderByClientIdRepository } from "../repositories/ordersRepository.js";
import dayjs from "dayjs";


export async function getOrderByClientIdController(req, res){
    const clientId = parseInt(req.params.id);

    try{
        const clientsIds = await clientsIdsRepository(); 
        let arrayClientsIds = [];
        
        for (let i = 0; i < clientsIds.rows.length; i++){
          arrayClientsIds.push(clientsIds.rows[i].id)
        }

        const orderByClientId = await orderByClientIdRepository(clientId);

        if(arrayClientsIds.includes(clientId) === false){
          res.sendStatus(404);
          return;
        }

        if(orderByClientId.rowCount === 0){
          res.status(404).send([]);
          return;
        }
        
        const estructuredOrderByClientId = orderByClientId.rows.map((order) => ({
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
        
        res.status(200).send(estructuredOrderByClientId)
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
}