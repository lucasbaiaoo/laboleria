import { ordersRepository } from "../repositories/ordersRepository.js";
import dayjs from "dayjs";

export async function getOrdersController(req, res){
    const date = req.query.date;
    
    try{
        const orders = await ordersRepository();

        if(orders.rowCount === 0){
          res.status(404).send([]);
          return;
        }
        
        const estructuredOrders = orders.rows.map((order) => ({
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

        if(date !==undefined && date.length !== 10){
          res.status(404).send("Insira uma data válida!");
          return;
        }

        if(date !== undefined && date.length === 10){
          let ordersByDate = [];


          for(let i = 0; i < estructuredOrders.length; i++){
            if(estructuredOrders[i].createdAt.slice(0, 10) === date){
              ordersByDate.push(estructuredOrders[i]);
            }
          }

          if(ordersByDate.length === 0){
            res.status(404).send([]);
            return;
          }

          res.status(200).send(ordersByDate);
          return;
        }
        
        res.status(200).send(estructuredOrders)
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
}