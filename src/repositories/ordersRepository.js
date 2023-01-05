import connectionDB from "../database/db.js"

export function orderInfoRepository(clientId, cakeId, quantity, totalPrice){
    return connectionDB.query("INSERT INTO orders (client_id, cake_id, quantity, total_price) VALUES ($1, $2, $3, $4);", [clientId, cakeId, quantity, totalPrice]);
}