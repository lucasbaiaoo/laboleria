import connectionDB from "../database/db.js"

export function orderInfoRepository(clientId, cakeId, quantity, totalPrice){
    return connectionDB.query("INSERT INTO orders (client_id, cake_id, quantity, total_price) VALUES ($1, $2, $3, $4);", [clientId, cakeId, quantity, totalPrice]);
}

export function ordersRepository(){
    return connectionDB.query('SELECT clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone, cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image, orders.id AS "orderId", created_at AS "createdAt", quantity, total_price AS "totalPrice" FROM orders JOIN clients ON client_id = clients.id JOIN cakes ON cake_id = cakes.id;');
}

export function ordersIdsRepository(){
    return connectionDB.query("SELECT orders.id FROM orders;")
}

export function orderByIdRepository(id){
    return connectionDB.query('SELECT clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone, cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image, orders.id AS "orderId", created_at AS "createdAt", quantity, total_price AS "totalPrice" FROM orders JOIN clients ON client_id = clients.id JOIN cakes ON cake_id = cakes.id WHERE orders.id = $1;', [id]);
}