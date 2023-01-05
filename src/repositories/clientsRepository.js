import connectionDB from "../database/db.js"

export function clientInfoRepository(name, address, phone){
    return connectionDB.query("INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);", [name, address, phone]);
}